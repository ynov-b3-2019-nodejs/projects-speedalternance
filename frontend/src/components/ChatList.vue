<template>
  <div id='chatList' >
    <h4 class="title is-4" style="text-align: center;"> Mes Messages </h4>
    <div v-for='chat in myChatList' v-bind:key="chat.id" v-bind:chat="chat">
      <div class='chatPreview' @click="openChatRoom(chat._id)">
        <p class="title is-6">{{ Capitalize(chat._id) }}</p>
        <p class="subtitle is-6" v-if='chat.messages.length > 0'>{{ chat.messages[chat.messages.length - 1].content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChatService from "../services/Chat";
import UserService from "../services/User";
import * as io from "socket.io-client";

export default {
  name: "ChatList",
  data() {
    return {
      isUserConnected: {},
      myChatList: [],
      socket: io(window.location.hostname + ":3000"),
      err: ""
    };
  },
  created() {
    ChatService.getAllUserChats().then( res => {
      this.myChatList = res.data
    })
  },
  watch: {
    myChatList: function (val, oldVal) {
      console.log(this.myChatList)
      this.openChatRoom(this.myChatList[0]._id)
    }
  },
  methods: {
    openChatRoom(chatRoomId) {
      this.$emit('openChat',chatRoomId)
    },
    Capitalize(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    getUserName(id){
      
    }
  }
};
</script>

<style scoped>
.chatPreview {
  border-bottom: 1px solid lightgray;
  min-height: 3em;
  padding: 1em;
}
.chatPreview:hover {
  background-color: lightgray;
  font-weight: bold;
  cursor: pointer;
}
#chatList {
  text-align: left;
}
</style>