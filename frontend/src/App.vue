<template>
  <div id="app">
    <Header
      :isLogin="logged"
      msg="Welcome to Your Vue.js App"
      @signOut="signOutAction"
      @login="loginAction"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UserService from "./services/User";
import EventBus from './EventBus'

export default {
  name: "app",
  components: {
    Header
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
          this.$snackbar.open({
                    message: `Content de vous acceuillir parmis nous!`,
                    type: 'is-success',
                    position: 'is-top-right',
                    actionText: 'ok',
                    indefinite: true,
                });
          this.spawnSignup = false;
          this.logged = true;
          this.$router.push('/')
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
      localStorage.removeItem("user");
      this.logged = false;
      this.$toast.open({
        duration: 5000,
        message: `A bientot !`,
        type: "is-success"
      });
    },
    loginAction(login) {
      UserService.login(login)
        .then(() => {
          const user = JSON.parse(localStorage.user)
          this.$toast.open({
            duration: 5000,
            message: `Content de vous revoir parmis nous ${user.firstname} ${user.name}`,
            type: "is-success"
          });
          this.spawnLogin = false;
          this.logged = true;
          this.$router.push('/')
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
