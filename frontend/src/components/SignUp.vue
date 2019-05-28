<template>
    <section class="container">
        <h2 class="title">Formulaire Inscription</h2>
        <div class="columns">
            <b-field label="Prenom" class="column">
                <b-input v-model="user.firstname"></b-input>
            </b-field>

            <b-field label="Nom" class="column">
                <b-input v-model="user.name"></b-input>
            </b-field>

            <b-field label="Email" class="column">
                <b-input type="email"
                    v-model="user.email"
                    :placeholder="autoEmail"
                    maxlength="30">
                </b-input>
            </b-field>

            <b-field label="Quel est votre profil ?" class="column">
                <b-select v-model="isStudientString" placeholder="Etudiant">
                    <option value="true">Etudiant</option>
                    <option value="false">Professionel</option>
                </b-select>
            </b-field>
        </div>
        <div class="columns">
            <b-field label="Password" class="column">
                <b-input v-model="user.password" type="password" maxlength="30"></b-input>
            </b-field>
        </div>

        <button class="button is-success" @click="submitSignUp">S'inscrire</button>

    </section>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    msg: String,
    login: Boolean,
    isStudent : Boolean
  },
  data(){
        return {
            user:  {
                name: '',
                firstname: '',
                password: '',
                email: '',
                isStudent: false
            },
            err: '',
            isStudientString: false
        }
  },
  methods: {
    submitSignUp(){
        this.isStudientString === "true" ? this.user.isStudent = true : this.user.isStudent = false
        this.$emit('trySingUp',this.user)
    }
  },
  computed: {
      autoEmail(){
          return  this.user.firstname.toLowerCase() + '.' + this.user.name.toLowerCase()  + "@ynov.com"
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