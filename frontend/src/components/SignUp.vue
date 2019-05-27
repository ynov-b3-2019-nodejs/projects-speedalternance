<template>
    <section class="container">
        <h2 class="title">Formulaire Inscription</h2>
        <div class="columns">
            <b-field label="Prenom" class="column">
                <b-input v-model="user.firstname"></b-input>
            </b-field>

            <b-field label="Nom" class="column">
                <b-input v-model="user.lastname"></b-input>
            </b-field>

            <b-field label="Email" class="column">
                <b-input type="email"
                    v-model="user.email"
                    :placeholder="autoEmail"
                    maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Quel est votre profil ?" class="column">
                <b-select v-model="isStudent" placeholder="Etudiant">
                    <option value="true">Etudiant</option>
                    <option value="false">Professionel</option>
                </b-select>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="Password" class="column">
                <b-input v-model="user.password" type="password" maxlength="30"></b-input>
            </b-field>
            <b-field label="Confirmez votre Password" class="column">
                <b-input v-model="passwordConfirmation" type="password" maxlength="30"></b-input>
            </b-field>
        </div>

        <button class="button is-success">S'inscrire</button>

    </section>
</template>

<script>
import UserService from '../services/User';

export default {
  name: 'Header',
  props: {
    msg: String,
    login: Boolean
  },
  data(){
        return {
            user:  {
                lastname: '',
                firstname: '',
                password: '',
                email: '',
                isStudent: '',
                competencies: []
            }
        }
  },
  methods: {
    submitSignUp(){
        UserService.signUp(this.user)
            .then((response) => {
                localStorage.setItem('access_token',response.data.acces_token)
            })
    }
  },
  computed: {
      autoEmail(){
          return  this.user.firstname.toLowerCase() + '.' + this.user.lastname.toLowerCase()  + "@ynov.com"
      }
  }
}
</script>

<style scoped>
h2{
  margin: 40px 0 0;
  color: grey;
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