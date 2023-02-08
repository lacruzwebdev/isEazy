<script setup>
import { ref } from 'vue';
import Modal from "./components/Modal.vue"

const showModal = ref(false)

function toggleModal() {
  showModal.value = !showModal.value
}

</script>

<template>
  <header></header>
  <main class="bg-white">
    <div class="container h-screen flex items-center justify-center mx-auto">
      <button class="bg-blue-600 p-4 text-white font-bold rounded-xl" @click="toggleModal">Abrir Comentarios</button>
        <Modal :show="showModal" title="Comentarios" @close="showModal = false"/>
    </div>
  </main>
  <footer></footer>
</template>

<style scoped>

</style>
