<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <header>
    <TheNavigation></TheNavigation>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  min-height: 90vh;
}
</style>
