<template>
  <div class="container mx-auto px-8 py-8 max-w-[1400px]">
    <div class="search-container mb-8">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Rechercher un livre..."
        class="w-full px-6 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      />
    </div>
    
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="book in filteredBooks"
        :key="book.codeBarre"
        @click="goToBook(book)"
        class="book-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <div class="book-cover mb-6 bg-gradient-to-br from-blue-100 to-blue-50 h-48 rounded-lg flex items-center justify-center">
          <span class="text-4xl text-blue-300">📚</span>
        </div>
        <h2 class="text-xl font-bold mb-4 text-gray-800">{{ book.title }}</h2>
        <p class="text-gray-600 mb-4">{{ book.writer.fullname }}</p>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>{{ book.editor }}</span>
          <span class="book-date">{{ book.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.book-card:hover {
  transform: translateY(-2px);
  border-color: #93c5fd;
}

.search-container input {
  background-color: white;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.book-date {
  background-color: #f3f4f6;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.875rem;
}

.book-card {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { books } from '../assets/books.js'

const router = useRouter()
const searchQuery = ref('')

const filteredBooks = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return books.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.writer.fullname.toLowerCase().includes(query) ||
    book.editor?.toLowerCase().includes(query)
  )
})

const goToBook = (book) => {
  router.push({ name: 'book', params: { id: book.codeBarre } })
}
</script>