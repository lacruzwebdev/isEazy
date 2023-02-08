import {defineStore} from "pinia"
import axios from "axios"
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";

export const useConvoStore = defineStore('convo', {
   state: () => ({
      messages: []
   }),
   actions: {
      // We fetch messages from JSON Server
      async fetchMessages() {
         this.messages = [];
         try {
            const res = await axios.get("http://localhost:3000/api")
            // Order messages by date
            res.data.sort((a,b) => {
               //JSON date to JS
               const dateA = new Date(a.date)
               const dateB = new Date(b.date)
               return dateA - dateB
            })
            this.messages = res.data
         } catch (err) {
            throw err
         }
      },
      // Add new message to state
      addMessage(data) {
         this.messages.push(data)
      }
   }
})