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
                content: ''
            }
        }
    },
    meyhods: {
        submitPost(){
            PostService.publish(this.post)
        }
    }
}
</script>

<style scoped>

</style>
