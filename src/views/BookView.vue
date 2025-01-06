<template>
  <div v-if="book" class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg book-detail">
      <div class="mb-8 text-center">
        <div class="book-icon mb-4">📚</div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ book.title }}</h1>
        <p class="text-xl text-blue-600">{{ book.writer.fullname }}</p>
      </div>

      <div class="space-y-6">
        <div v-for="(value, key) in bookDetails" :key="key" 
             class="detail-row flex border-b pb-4 hover:bg-gray-50 rounded-lg p-3 transition-colors">
          <span class="font-semibold w-32 text-gray-700">{{ key }}:</span>
          <span class="text-gray-600">{{ value || 'Non disponible' }}</span>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button 
          @click="router.push('/')"
          class="back-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à la liste
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { books } from '/VueJS/labo2/src/assets/books.js'

const route = useRoute()
const router = useRouter()

const book = computed(() => {
  return books.find(book => book.codeBarre === route.params.id)
})

const bookDetails = computed(() => ({
  'ISBN-13': book.value?.isbn?.isbn13?.id,
  'Éditeur': book.value?.editor,
  'Date': book.value?.date,
  'Format': book.value?.format,
  'Type': book.value?.type,
  'Section': book.value?.section
}))
</script>

<style scoped>
.book-detail {
  animation: slideIn 0.5s ease-out;
}

.book-icon {
  font-size: 4rem;
  text-align: center;
  color: #3b82f6;
}

.detail-row {
  animation: fadeIn 0.5s ease-out;
}

.back-button {
  box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.2);
}

.back-button:hover {
  box-shadow: 0 6px 8px -1px rgba(59, 130, 246, 0.3);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>