<template>
  <div>
    <ul class="msgContainer" v-chat-scroll="{always: false, smooth: true}">
      <li v-for="msg in chats" v-bind:key="msg.id" v-bind:msg="msg">
        <div v-if="msg.emit_by == isUserConnected._id" style="text-align: right">
          <p class="msg myMsg">{{ msg.content }} toto</p>
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

export default {
  name: "ChatRoom",
  data() {
    return {
      chats: [ { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" }, { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" }, { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" }, { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" }, { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" }, { "created_date": "2019-06-17T07:20:10.497Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:20:20.014Z", "_id": "5ced159158587d6c9d7ffaeb", "emit_by": "Cheikh", "content": "yo brice" }, { "created_date": "2019-06-17T07:21:01.869Z", "_id": "5ced3eb27d947800176c8c11", "emit_by": "brice", "content": "hey bibi" } ],
      error: "",
      content: "",
      socket: io(window.location.hostname + ":3000"),
      isUserConnected: JSON.parse(localStorage.getItem("user"))
    };
  },
  props: {
    currentChatId: "5d073e51a969c6001745243e"
  },
  created() {
    ChatService.getCurrentChat("5d073e51a969c6001745243e")
      .then(response => {
        this.chats = response.data.messages;
      })
      .catch(err => {
        this.error = err.message;
      });

    this.socket.on("new-message", data => {
      this.chats.push(data);
    });
  },
  methods: {
    sendMessage(evt) {
      evt.preventDefault();
      const chatRoom = {
        emitBy: this.isUserConnected._id,
        content: this.content
      };
      ChatService.updateChat("5d073e51a969c6001745243e", chatRoom)
        .then(response => {
          this.socket.emit("new-message", chatRoom);
        })
        .catch(err => {
          this.error = err.message;
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
  bottom: 10px;
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
</style>