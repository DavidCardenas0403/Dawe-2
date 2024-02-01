<script setup>
import useAxios from "../composables/useAxios";
import { RouterLink } from "vue-router";

const { comarques, fetchAll } = useAxios();

fetchAll();
</script>

<template>
  <h1>Comarques</h1>
  <ul>
    <li v-for="(comarca, index) in comarques" :key="index">
      <RouterLink :to="`/consum/${comarca.codi_comarca}`">{{
        comarca.comarca.split(",")[0]
      }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
