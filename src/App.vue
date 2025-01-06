<template>
  <div class="app-container">
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
      <div class="container mx-auto">
        <h1 class="text-5xl font-extrabold tracking-wide text-center">
          <span class="logo-text">Biblio App</span>
        </h1>
      </div>
    </header>

    <main class="min-h-screen bg-gray-50">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2025 Ottoniel Castaneda Aguilar - Biblio App</p>
    </footer>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: rgb(235, 240, 241);
}

main {
  flex: 1;
  margin: 40px;
}

.logo-text {
  font-size: 3.5rem;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
}

@media (max-width: 640px) {
  .logo-text {
    font-size: 2.5rem;
  }
}
</style>