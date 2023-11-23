<script lang="ts" setup>
import { RouterLink } from "vue-router";
import router from "@/router";
console.log(router.currentRoute.value.params);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/destination/1/brazil">Brazil</RouterLink>
    <RouterLink to="/destination/2/panama">Panama</RouterLink>
    <RouterLink to="/destination/3/hawaii">Hawaii</RouterLink>
    <RouterLink to="/destination/4/jamaica">Jamaica</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}
</style>
