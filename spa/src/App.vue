<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Spa</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/list">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
* {
  font-family: monospace;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 1rem;
  background: #a6bfff;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
}
nav a {
  margin-right: 1rem;
}
iframe {
  flex: 1;
  border: 0;
}
</style>
