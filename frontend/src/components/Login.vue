<template>
    <section class="container">
        <h2 class="title">Connexion</h2>
        <div class="">
            <b-field label="Email" class="">
                <b-input type="email"
                    v-model="login.email"
                    :placeholder="autoEmail"
                    maxlength="30">
                </b-input>
            </b-field>
            <div class="">
                <b-field label="Password" class="column">
                    <b-input v-model="login.password" type="password" maxlength="30"></b-input>
                </b-field>
            </div>
        </div>


        <button class="button is-success" @click="submitLogin">Se connecter</button>

    </section>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data(){
    return{
        login: {
            email: '',
            password:''
        }
    }
  },
  method: {
      submitLogin(){
          this.$emit('login',login)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
