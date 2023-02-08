<script setup>
import { ref } from "vue";
import axios from "axios"
import { onMounted } from "vue"
import {useConvoStore} from "./../stores/convo"
import Bubble from "./Bubble.vue"
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { storeToRefs } from "pinia";
const {messages} = storeToRefs(useConvoStore())
const {fetchMessages, addMessage} = useConvoStore();

library.add(faArrowRight)
const newMessage = ref();

// Fetch Messages and save it in store
fetchMessages();

function sendMessage() {
   // If empty message do nothing
   if (!newMessage.value) return
   addMessage({
      hasFile: false,
      user: {
         id: 0, 
         pic: "./src/assets/avatar0.webp"
      },
      text: newMessage.value,
      date: new Date().toJSON()
   })
   // We clear input after post
   newMessage.value = ""
}
</script>

<template>
   <div class="flex flex-col gap-4 p-4">
      <!-- Show last 6 messages -->
      <div v-for="item in messages.slice(-6)">
         <Bubble :message="item" />
      </div>
   </div>
   <div class="border-t-4 p-4 flex items-center gap-4">
      <!-- New Message -->
      <input type="text" v-model="newMessage" @keyup.enter="sendMessage()" class="border-2 px-2 py-1 rounded-full bg-gray-50 flex-grow"/>
      <button @click="sendMessage()">
         <font-awesome-icon class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 text-2xl" icon="fa-solid fa-arrow-right" />
      </button>
   </div>
</template>