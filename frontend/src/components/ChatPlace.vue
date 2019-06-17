<template>
    <div class="columns chatPlace">
        <ChatList class="column is-one-fifth ChatList" @openChat='open'></ChatList>
        <ChatRoom class="column" :currentChatId="this.currentChatId" ></ChatRoom>
    </div>
</template>

<script>
import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";
import * as io from "socket.io-client";

export default {
    name: "ChatPlace",
    components: {
        ChatList,
        ChatRoom
    },
    data(){
        return {
            currentChatId: "",
        }
    },
    methods: {
        open(id){
            this.currentChatId = id
        }
    }
}
</script>

<style>
.ChatList {
    border-right: 1px solid black;
    height: 100%;
}
.chatPlace{
    margin-top: 2em;
}
</style>