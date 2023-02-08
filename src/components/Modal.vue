<script setup>
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {faX} from "@fortawesome/free-solid-svg-icons"
import Conversation from "./Conversation.vue"

library.add(faX)


const props = defineProps({
   title: String,
   show: Boolean
})
</script>

<template>
   <Transition name="modal">
   <!-- Close when clicking backdrop -->
   <div v-if="show" class="bg-black/50 w-screen h-screen fixed z-10 flex items-center justify-center" @click.self="$emit('close')">
      <!-- Modal Container -->
         <div class="bg-white absolute w-2/4 rounded">
            <div class="p-4 border-b-2 border-black">
               <h2 class="text-center font-bold">{{ title }}</h2>
               <!-- Close Button -->
               <font-awesome-icon class="absolute top-5 right-4 text-blue-500 cursor-pointer" icon="fa-solid fa-x" @click="$emit('close')"/>
            </div>
            <div>
               <Conversation />
            </div>
         </div>
      </div>
   </Transition>
</template>

<style>
/* Fade In/Out Animations */
.modal-enter-active {
  transition: all 0.5s ease-in-out;
}

.modal-leave-active {
  transition: all .5s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>