<template>
  <div>
    <b-table :data="chats">
      <template slot-scope="props">
        <b-table-column label="messages">{{props.row.content}}</b-table-column>
        <b-table-column label="name">{{props.row.emit_by}}</b-table-column>
      </template>
    </b-table>
    <form class="chatForm">
      <b-field grouped>
        <b-input placeholder expanded></b-input>
        <p class="control">
          <button class="button is-success">SEND</button>
        </p>
      </b-field>
    </form>
  </div>
</template>

<script>
import ChatService from "../services/Chat";
export default {
  name: "ChatRoom",
  data() {
    return {
      chats: [],
      error: ""
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
  },
  methods: {}
};
</script>

<style>
.chatForm {
  margin: 20px auto;
  width: 80%;
}
</style>