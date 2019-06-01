<template>
    <section class="container">
            <h2 class="title">Listes des dernieres annonces</h2>
            <b-button type="is-success">Ajouter une annonce</b-button>
            <div>
                <div v-for="post in posts"
                     v-bind:key="post.id"
                     v-bind:post="post"
                     class="post columns">
                        <div class="column isJobOffer" v-if="post.isJobOffer" >
                         <p class="title is-5"><br>Pro</p>
                        </div>
                        <div class="column studentSearch"  v-if="!post.isJobOffer">
                         <p class="title is-5"><br>Etu</p>
                        </div>
                        <div class="column is-four-fifths">
                            <p class="title is-6">{{ post.title }}</p>
                            <p class="subtitle is-6">{{ post.content }}</p>
                        </div>
                        <div class="column is-vcentered emailIcon">
                                <b-icon class="is-vcentered" icon="email" size="is-large" type="is-success"></b-icon>
                        </div>
                </div>
            </div>

    </section>
</template>

<script>
import PostService from '../services/Post'

export default {
    name: 'Post',
    data(){
        return{
            posts: [],
        }
    },
    created() {
      PostService.getAll().then(res => this.posts = res.data.posts)
      .catch(err => this.$toast.open({
            duration: 5000,
            message: `une erreur est survenue : ${err}`,
            type: "is-danger"
          }));
    }
}
</script>

<style scoped>
.post{
    border: 1px solid grey;
    border-radius: 1em;
    margin: 1em;
    text-align: left;
}
.post:hover{
    box-shadow: 10px 5px 5px lightgrey;
    border: 1px solid black;
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
.isJobOffer{
    background-color: rgb(38, 203, 78);
    border: 1px solid grey;
    border-radius: 0.9em;
    text-align: center;
}
.isJobOffer p{
    color: white;
}
.studentSearch{
    background-color: rgb(101,59,203);
    border: 1px solid grey;
    border-radius: 0.9em;
    text-align: center;
}
.studentSearch p{
    color: white;
}
.emailIcon{
    cursor: pointer;
}
</style>