<script setup lang="ts">
import { RouterView } from "vue-router";
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
