<template>
  <div class="home">
    <div class="title-container my-12">
      <h1 class="text-6xl font-bold text-center text-gray-700">Mes Livres</h1>
      <div class="w-32 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
    </div>
    <BookList />
  </div>
</template>

<style scoped>
.title-container {
  padding: 1.5rem 0;
}

h1 {
  letter-spacing: 0.05em;
  font-size: 2rem;
}

@media (max-width: 640px) {
  h1 {
    font-size: 3rem;
  }
}
</style>
  
  <script setup>
import BookList from '../components/BookList.vue'
  </script>