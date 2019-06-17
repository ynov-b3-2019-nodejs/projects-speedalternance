<template>
  <div id='chatList' >
    <h4 class="title is-4" style="text-align: center;"> Mes Messages </h4>
    <div v-for='chat in connectedUser' v-bind:key="chat.id" v-bind:chat="chat">
      <div class='chatPreview'>
        <p class="title is-6">{{ Capitalize(chat.firstname) }} {{ Capitalize(chat.name) }}</p>
        <p class="subtitle is-6" >Le dernier message envoyé par le contact ... </p>
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
      connectedUser: [],
      disconnectedUser: [],
      user: [],
      socket: io(window.location.hostname + ":3000"),
      err: ""
    };
  },
  async created() {
    this.isUserConnected = JSON.parse(localStorage.getItem("user"));
    UserService.getUser()
      .then(result => {
        this.user = result.data;
        this.disconnectedUser = this.user.filter(res => {
          return !res.isConnected;
        });
        this.connectedUser = this.user.filter(res => {
          return res.isConnected;
        });
      })
      .catch(error => {
        this.err = error.message;
      });
  },
  methods: {
    openChatRoom(receiver_id) {
      const chatRoom = {
        emitBy: this.isUserConnected.firstname,
        content: `${this.isUserConnected.firstname} est en train d'ecrire ... `
      };
      ChatService.createChat(chatRoom)
        .then(response => {
          this.$router.push({
            name: "ChatRoom",
            params: { id: response.data.chat._id, receiver_id }
          });
        })
        .catch(err => {
          this.err = err.message;
        });
    },
    Capitalize(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
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