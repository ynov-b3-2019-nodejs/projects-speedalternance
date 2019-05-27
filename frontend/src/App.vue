<template>
  <div id="app">
    <Header :isLogin="logged" msg="Welcome to Your Vue.js App" @signup="signUpAction"/>
    <Signup v-if="signup" ></Signup>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Signup from './components/SignUp.vue'

export default {
  name: 'app',
  components: {
    Header,
    Signup
  },
  data() {
    return {
      signup: false,
      logged: localStorage.acces_token ? true : false
    }
  },
  methods: {
    signUpAction() {
      this.signup = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
