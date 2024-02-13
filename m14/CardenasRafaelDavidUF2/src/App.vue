<script setup>
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <Menu />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
}

.logo {
  height: 50%;
}

nav {
  font-size: 16px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
