import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/VueJS/labo2/src/views/HomeView.vue'
import BookView from '/VueJS/labo2/src/views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookView
    }
  ]
})

export default router