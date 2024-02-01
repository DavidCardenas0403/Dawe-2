<script setup>
import { ref, provide } from "vue";
import Formulari from "@/components/Formulari.vue";
import LlistaTasques from "@/components/LlistaTasques.vue";

const tasques = ref([]);
console.log(tasques.value == false);

const afegirTasca = (tasca) => {
  console.log(tasca);
  tasques.value.push(tasca);
};

provide("tasques", tasques.value);
</script>

<template>
  <h1>Llista de tasques</h1>
  <Formulari @@afegir-tasca="(tasca) => afegirTasca(tasca)" />
  <LlistaTasques />
</template>

<style scoped></style>
