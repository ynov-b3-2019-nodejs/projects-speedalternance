<template>
  <div>
    <b-table :data="connectedUser" :columns="columns">
      <template slot-scope="props">
        <b-table-column label="First name">{{props.row.firstname}}</b-table-column>
        <b-table-column label="Name">{{props.row.name}}</b-table-column>
        <b-table-column label="Email">{{props.row.email}}</b-table-column>
        <b-table-column label="isConnected">{{props.row.isConnected}}</b-table-column>
        <b-button type="is-success">Join</b-button>
      </template>
    </b-table>
  </div>
</template>
<script>
import UserService from "../services/User";
export default {
  name: "ChatList",
  props: {
    isUserConnected: {}
  },
  data() {
    return {
      connectedUser: [],
      disconnectedUser: [],
      user: [],
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
        receiver: receiver_id,
        sender: this.isConnected._id,
        emitBy: this.isConnected.firstname,
        content: `${this.isConnected.firstname} est en train d'ecrire ... `
      };
    }
  }
};
</script>