<script setup>
import { inject } from "vue";

const tasques = inject("tasques");
</script>

<template>
  <p v-if="tasques == false">No hi ha tasques</p>
  <ul v-else>
    <li v-for="(tasca, index) in tasques" :key="index">{{ tasca }}</li>
  </ul>
</template>

<style scoped></style>
