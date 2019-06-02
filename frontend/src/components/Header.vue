<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="/favicon.png" type="image/png">
      <h1 style="color:rgb(101,59,203)"> Speed Alternance</h1>
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Accueil
      </router-link>

      <router-link class="navbar-item" to="/annonces">
        Annonces
      </router-link>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" v-if="!isLogin">
          <router-link class="button is-primary" to='/signup'>
            <strong>Inscription</strong>
          </router-link>
          <button class="button is-light" @click="loginModal">
            Connexion
          </button>
        </div>
        <div class="buttons" v-if="isLogin">
          <button class="button is-danger" @click="signout">
            <strong>Deconnexion</strong>
          </button>
          <a class="button is-light">
            Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import LoginModal from './Login'

export default {
  name: 'Header',
  component: {
    LoginModal
  },
  props: {
    isLogin: Boolean
  },
  methods: {
    signout(){
      this.$emit('signOut')
    },
    loginModal() {
      this.$modal.open({
          parent: this,
          component: LoginModal,
          hasModalCard: true,
          events: {'login': (login) => {
            this.$emit('login',login)
          }}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
