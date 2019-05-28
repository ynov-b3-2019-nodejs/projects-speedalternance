<template>
  <div id="app">
    <Header
      :isLogin="logged"
      msg="Welcome to Your Vue.js App"
      @spawnSignup="spawnSignup = true"
      @spawnLogin="spawnLogin = true"
      @signOut="signOutAction"
      @login="loginAction"
    />
    <router-view></router-view>
    <ChatList></ChatList>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Signup from "./components/SignUp.vue";
import ChatList from "./components/ChatList.vue";
import UserService from "./services/User";
import ChatRoom from "./components/ChatRoom.vue";
import EventBus from './EventBus'

export default {
  name: "app",
  components: {
    Header,
    Signup,
    ChatList,
    ChatRoom
  },
  data() {
    return {
      spawnSignup: false,
      spawnLogin: false,
      logged: localStorage.access_token ? true : false
    };
  },
  mounted() {
    EventBus.$on('signup', this.signUpAction);
  },
  methods: {
    signUpAction(user) {
      UserService.signUp(user)
        .then(() => {
          this.$toast.open({
            duration: 5000,
            message: `Content de vous acceuillir parmis nous ${
              user.firstname
            } ${user.name}`,
            type: "is-success"
          });
          this.spawnSignup = false;
          this.logged = true;
          router.push('/')
        })
        .catch(err => {
          this.err = err;
          this.$toast.open({
            duration: 5000,
            message: err,
            // message: "Une erreur est survenue",
            type: "is-danger"
          });
        });
    },
    signOutAction() {
      localStorage.removeItem("access_token");
      this.logged = false;
      this.$toast.open({
        duration: 5000,
        message: err,
        //message: `A bientot !`,
        type: "is-danger"
      });
    },
    loginAction(login) {
      UserService.login(login)
        .then(() => {
          this.$toast.open({
            duration: 5000,
            message: `Content de vous revoir parmis nous ${login.firstname} ${
              login.name
            }`,
            type: "is-success"
          });
          this.spawnLogin = false;
          this.logged = true;
        })
        .catch(err => {
          this.err = err;
          this.$toast.open({
            duration: 5000,
            message: "Une erreur est survenue",
            type: "is-danger"
          });
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
