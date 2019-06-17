<template>
  <section class="container">
    <h2 class="title">Listes des dernieres annonces</h2>
    <b-button type="is-success" @click="newPostModal">Ajouter une annonce</b-button>
    <div>
      <div v-for="post in posts" v-bind:key="post.id" v-bind:post="post" class="post columns">
        <div class="column isJobOffer" v-if="post.isJobOffer">
          <p class="title is-5">
            <br>Pro
          </p>
        </div>
        <div class="column studentSearch" v-if="!post.isJobOffer">
          <p class="title is-5">
            <br>Etu
          </p>
        </div>
        <div class="column is-four-fifths">
          <p class="title is-6">{{ post.title }}</p>
          <p class="subtitle is-6">{{ post.content }}</p>
        </div>
        <div class="column is-vcentered emailIcon">
          <b-button size="is-large" class="customButton" @click="sendMessage(post.publisherId)">
            <b-icon class="is-vcentered" icon="email" size="is-large" type="is-success"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostService from "../services/Post";
import NewPost from "./NewPost";
import ChatService from "../services/Chat";
import * as io from "socket.io-client";

export default {
  name: "Post",
  data() {
    return {
      isUserConnected: {},
      posts: [],
      socket: io(window.location.hostname)
    };
  },
  methods: {
    newPostModal() {
      if (!localStorage.access_token) {
        this.$toast.open({
          duration: 5000,
          message: "Vous devez etre connecté pour poster une annonce",
          type: "is-danger"
        });
        return false;
      }
      this.$modal.open({
        parent: this,
        component: NewPost,
        hasModalCard: true
      });
    },
    async sendMessage(publisherId) {
      if (!localStorage.access_token) {
        this.$toast.open({
          duration: 5000,
          message: "Vous devez etre connecté pour répondre à une annonce",
          type: "is-danger"
        });
        return false;
      }
      const allChat = await ChatService.getAllChat();
      const isUserJoin = allChat.data.some(elements => {
        return (
          elements.users_id.includes(this.isUserConnected._id) &&
          elements.users_id.includes(publisherId)
        );
      });
      const chatRoom = {
        users_id: [publisherId, this.isUserConnected._id],
        messages: []
      };
      if (!isUserJoin) {
        ChatService.createChat(chatRoom)
          .then(() => {
            this.$router.push({
              name: "ChatPlace"
            });
            const chat = {
              emitBy: "system",
              content:
                this.isUserConnected.name +
                " a repondu a votre annonce " +
                this.isUserConnected
            };
            ChatService.updateChat(this.currentChatId, chat).then();
          })
          .catch(err => {
            this.err = err.message;
          });
      } else {
        const currentChat = allChat.data.filter(elements => {
          return (
            elements.users_id.includes(this.isUserConnected._id) &&
            elements.users_id.includes(publisherId)
          );
        });
        ChatService.getCurrentChat(currentChat[0]._id)
          .then(() => {
            this.$router.push({
              name: "ChatPlace",
              params: { id: currentChat[0]._id }
            });
          })
          .catch(err => {
            this.err = err.message;
          });
      }
    },
    reloadPost() {
      PostService.getAll()
        .then(res => (this.posts = res.data.posts))
        .catch(err =>
          this.$toast.open({
            duration: 5000,
            message: `une erreur est survenue : ${err}`,
            type: "is-danger"
          })
        );
    }
  },
  created() {
    this.isUserConnected = JSON.parse(localStorage.getItem("user"));
    this.socket.on("new-post", data => {
      this.posts.unshift(data);
    });
    PostService.getAll()
      .then(res => (this.posts = res.data.posts))
      .catch(err =>
        this.$toast.open({
          duration: 5000,
          message: `une erreur est survenue : ${err}`,
          type: "is-danger"
        })
      );
  }
};
</script>

<style scoped>
.post {
  border: 1px solid grey;
  border-radius: 1em;
  margin: 1em;
  text-align: left;
}
.post:hover {
  box-shadow: 10px 5px 5px lightgrey;
  border: 1px solid black;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.isJobOffer {
  background-color: rgb(38, 203, 78);
  border: 1px solid grey;
  border-radius: 0.9em;
  text-align: center;
}
.isJobOffer p {
  color: white;
}
.studentSearch {
  background-color: rgb(101, 59, 203);
  border: 1px solid grey;
  border-radius: 0.9em;
  text-align: center;
}
.studentSearch p {
  color: white;
}
.emailIcon {
  cursor: pointer;
}
.customButton {
  border: none;
}
</style>