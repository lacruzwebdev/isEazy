<script setup>
//We import date-fns for date formatting
import { format, parseJSON } from "date-fns";
//For computting the date of new messages
import { computed } from "vue"
//date-fns localization to Spanish
import { es } from 'date-fns/locale';
//Font Awesome
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {faCloudArrowDown} from "@fortawesome/free-solid-svg-icons"
library.add(faCloudArrowDown)

const props = defineProps({
   message: Object
})

//Date Format for messages
const formattedDate = computed(() => format(parseJSON(props.message.date), "dd MMM yyyy / hh:mm", {locale: es}))

</script>

<template>
   <!-- If it's a file -->
   <div v-if="message.hasFile" class="p-4 border-b-4 border-t-4 flex items-center justify-between">
      <div>
         <p class="font-bold uppercase text-xs">Versión {{ message.v }}</p>
         <p class="text-blue-400 font-bold">
            {{ message.title }}
         </p> 
         <p>Documento / {{ message.type }} ({{ message.size }}) - {{formattedDate }}</p>
      </div>
      <!-- Download Link -->
      <a :href="message.url">
         <font-awesome-icon class="text-blue-500 hover:text-blue-600 text-2xl" icon="fa-solid fa-cloud-arrow-down" />
      </a>
   </div>
   <!-- If it's a message -->
   <div v-if="!message.hasFile" class="flex items-center gap-6" :class="[ !message.user.id ? 'justify-end' : '']">
      <img :src="message.user.pic" class="w-[40px] h-[40px] rounded-full"/>
      <div class="p-3 relative" :class="[ !message.user.id ? 'bg-blue-500 text-white order-first own' : 'bg-gray-50 other']">
         {{ message.text }} 
         <p class="text-xs pt-4">
            {{ formattedDate }}
         </p>
      </div>
   </div>
</template>

<style>
/* Pseudo-elements for each message depending if we're sending or recieving */
.own:before {
   content: '';
   position: absolute;
   width: 20px;
   height: 20px;
   background-color: #3b82f6;
   right: -10px;
   top: 50%;
   transform: translateY(-50%) rotate(45deg);
}

.other:before {
   content: '';
   position: absolute;
   width: 20px;
   height: 20px;
   background-color: #f3f4f6;
   left: -10px;
   top: 50%;
   transform: translateY(-50%) rotate(45deg);
}
</style>