<script setup>
import { ref } from "vue";
const emit = defineEmits(["@afegirTasca"]);
const tasca = ref("");
</script>

<template>
  <form novalidate @submit.prevent="$emit('@afegirTasca', tasca)">
    <input type="text" v-model="tasca" placeholder="Afegir tasca..." />
    <button type="submit">Afegir</button>
  </form>
</template>

<style scoped></style>
