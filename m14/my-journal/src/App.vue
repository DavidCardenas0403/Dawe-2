<script setup lang="ts">
import { ref, type Ref } from "vue";
import Formulari from "./components/Formulari.vue";
import Post from "./components/Post.vue";

const posts: Ref<Array<{ emoji: string; text: string; date: Date }>> = ref([]);
</script>

<template>
  <header class="header">
    <img class="logo" src="" alt="Logo 'My Journal'" />
    <h1 class="title">My Journal</h1>
  </header>
  <main>
    <Formulari />
    <section class="posts">
      <Post v-for="(post, index) in posts" :key="index" :info="post" />
    </section>
  </main>
</template>

<style scoped></style>
