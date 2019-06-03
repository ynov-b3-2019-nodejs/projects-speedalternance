<template>
  <div>
    <b-table :data="connectedUser" :columns="columns">
      <template slot-scope="props">
        <b-table-column label="First name">{{props.row.firstname}}</b-table-column>
        <b-table-column label="Name">{{props.row.name}}</b-table-column>
        <b-table-column label="Email">{{props.row.email}}</b-table-column>
        <b-table-column label="isConnected">{{props.row.isConnected}}</b-table-column>
        <b-button @click="openChatRoom(props.row._id)" type="is-success">Join</b-button>
      </template>
    </b-table>
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
      socket: io("http://localhost:4000"),
      err: "",
      columns: [
        {
          field: "firstname",
          label: "First Name"
        },
        {
          field: "name",
          label: "Last Name"
        },
        {
          field: "email",
          label: "Email"
        },
        {
          field: "isConnected",
          label: "Connected"
        }
      ]
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
    async openChatRoom(receiver_id) {
      const allChat = await ChatService.getAllChat();
      const isUserJoin = allChat.data.some(elements => {
        return elements.messages.find(element => {
          return (
            element.sender_id === this.isUserConnected._id &&
            element.receiver_id === receiver_id
          );
        });
      });
      const chatRoom = {
        receiver: receiver_id,
        sender: this.isUserConnected._id,
        emitBy: this.isUserConnected.firstname,
        content: `${this.isUserConnected.firstname} est en train d'ecrire ... `
      };
      if (!isUserJoin) {
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
      } else {
        const chat = allChat.data.filter(elements => {
          return elements.messages.find(message => {
            return (
              message.sender_id === this.isUserConnected._id &&
              message.receiver_id === receiver_id
            );
          });
        });
        ChatService.updateChat(chat[0]._id, chatRoom)
          .then(response => {
            this.$router.push({
              name: "ChatRoom",
              params: { id: chat[0]._id, receiver_id }
            });
          })
          .catch(err => {
            this.err = err.message;
          });
      }
    }
  }
};
</script>