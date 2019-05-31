<template>
    <section class="container">
            <h2 class="title">Listes des dernieres annonces</h2>
            <div>
                <div v-for="post in posts"
                     v-bind:key="post.publisherId"
                     v-bind:post="post"
                     class="post columns">
                        <div class="column">
                         <p v-if="post.isJobOffer" class="title is-5">Pro</p>
                         <p v-if="!post.isJobOffer" class="title is-5">Etu</p>
                        </div>
                        <div class="column is-four-fifths">
                            <p class="title is-6">{{ post.title }}</p>
                            <p class="subtitle is-6">{{ post.content }}</p>
                        </div>
                        <div class="column is-vcentered">
                                <b-icon class="is-vcentered" icon="email" size="is-large" type="is-success"></b-icon>
                        </div>
                </div>
            </div>

    </section>
</template>

<script>
import dummyPost from '../example.api.response.json'
export default {
    name: 'Post',
    data(){
        return{
            posts: dummyPost,
        }
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
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>