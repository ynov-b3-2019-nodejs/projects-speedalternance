<template>
  <div>
    <b-table :data="chats">
      <template slot-scope="props">
        <b-table-column label="messages">{{props.row.content}}</b-table-column>
        <b-table-column label="name">{{props.row.emit_by}}</b-table-column>
      </template>
    </b-table>
    <form @submit="sendMessage" class="chatForm">
      <b-field grouped>
        <b-input v-model="content" placeholder expanded></b-input>
        <p class="control">
          <button type="submit" class="button is-success">SEND</button>
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
      chats: [],
      error: "",
      content: "",
      socket: io("http://localhost:4000"),
      isUserConnected: JSON.parse(localStorage.getItem("user"))
    };
  },
  created() {
    ChatService.getCurrentChat(this.$route.params.id)
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
        receiver: this.$route.params.receiver_id,
        sender: this.isUserConnected._id,
        emitBy: this.isUserConnected.firstname,
        content: this.content
      };
      ChatService.updateChat(this.$route.params.id, chatRoom)
        .then(response => {
          this.socket.emit("new-message", response.data.messages);
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
  width: 80%;
}
</style>