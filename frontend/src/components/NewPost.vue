<template>
<form @submit.prevent="submitPost">
    <div class="modal-card" style="width: 50em">
                <header class="modal-card-head">
                    <p class="modal-card-title">Nouvelle Annonce</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Titre">
                        <b-input
                            v-model="post.title"
                            placeholder="Titre de votre annonce"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Cotenue de l'annonce">
                        <b-input
                            type="textarea"
                            v-model="post.content"
                            placeholder="Ecrivez ici votre annonce, les personnes interréssé vous ecrirons ensuite "
                            required>
                        </b-input>
                    </b-field>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Annuler</button>
                    <button class="button is-primary" type="submit">Publier mon annonce</button>
                </footer>
            </div>
    </form>
</template>

<script>
import PostService from '../services/Post'

export default {
    name: 'NewPost',
    data(){
        return{
            post: {
                title: '',
                content: '',
                publisherId: '',
                isJobOffer : false
            }
        }
    },
    methods: {
        submitPost(){
            const user = JSON.parse(localStorage.user)
            this.post.publisherId = user._id
            this.post.isJobOffer = !user.isStudent
            PostService.publish(this.post)
                .then(res => {
                    console.log(res.status)
                    this.$toast.open({
                        duration: 5000,
                        message: "Annonces ajouté !",
                        type: "is-success"
                    });
                    this.$router.push('/annonces')
                })
                .catch(err => {
                    this.$toast.open({
                        duration: 5000,
                        message: err,
                        type: "is-danger"
                    });
                })
        }
    }
}
</script>

<style scoped>

</style>
