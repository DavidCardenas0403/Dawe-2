<script setup>
import useAxios from "../composables/useAxios";
import { RouterLink } from "vue-router";

const { comarques, fetchAll } = useAxios();

fetchAll();
</script>

<template>
  <h1>Comarques</h1>
  <ul>
    <RouterLink
      v-for="(comarca, index) in comarques"
      :key="index"
      :to="`/consum/${comarca.codi_comarca}`"
      >{{ comarca.comarca.split(",")[0] }}</RouterLink
    >
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
