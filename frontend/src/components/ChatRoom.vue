<template>
  <div>
    <h4 class="title is-4" style="text-align: left;">{{ currentChatId }}</h4>
    <ul class="msgContainer data-target" v-chat-scroll>
      <li class="messages"  v-for="msg in chats" v-bind:key="msg.id" v-bind:msg="msg">
        <div v-if="msg.emit_by == isUserConnected._id" style="text-align: right">
          <p class="msg myMsg">{{ msg.content }}</p>
        </div>
        <div v-else style="text-align: left">
          <p class="msg contactMsg">{{ msg.content }}</p>
        </div>
      </li>
    </ul>

    <form  @submit.prevent="sendMessage" class="chatForm">
      <b-field grouped>
        <b-input v-model="content" placeholder="Ecrivez quelque chose ... " expanded></b-input>
        <p class="control">
          <button type="submit" class="button is-success">ENVOYER</button>
        </p>
      </b-field>
    </form>
  </div>
</template>

<script>
import ChatService from "../services/Chat";
import * as io from "socket.io-client";
import Vue from 'vue';

import VueChatScroll from 'vue-chat-scroll';

Vue.use(VueChatScroll);

export default {
  name: "ChatRoom",
  data() {
    return {
      chats: [],
      error: "",
      content: "",
      socket: io(window.location.hostname),
      isUserConnected: JSON.parse(localStorage.getItem("user"))
    };
  },
  props: {
    currentChatId: String
  },
  watch: {
    currentChatId: function() { // watch it
      this.getChat(this.currentChatId)
    }
  },
  created() {
    this.getChat(this.currentChatId)
  },
  methods: {
    sendMessage(evt) {
      evt.preventDefault();
      const chatRoom = {
        emitBy: this.isUserConnected._id,
        content: this.content
      };
      ChatService.updateChat(this.currentChatId, chatRoom)
        .then(() => {

          this.socket.emit("new-message", chatRoom);
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    getChat(chatId){
      ChatService.getCurrentChat(chatId)
      .then(response => {
        this.chats = response.data.messages;
      })
      .catch(err => {
        this.error = err.message;
      });

      this.socket.on("new-message", data => {
        this.chats.push(data);
      });
    }
  }
};
</script>

<style>
.chatForm {
  margin: 20px auto;
  padding-right: 1em;
  width: 80%;
  position: fixed;
  bottom: 0px;
}
.msgContainer{
  padding: 1em;
}
.msg {
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 2em;
  max-width: 45%;
  border: 1px solid ligthgrey;
  margin-top: 0.2em;
}
.myMsg {
  margin-left: 55%;
  background-color: rgb(41, 137, 247);
  color: white;
}
.contactMsg {
  background-color: rgb(223,222, 229);
  color: black;
}
.data-target {
    overflow-y: scroll;
    position: relative;
    height: 70vh;
}
</style>