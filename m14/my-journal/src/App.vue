<script setup lang="ts">
import { reactive } from "vue";
import Formulari from "./components/Formulari.vue";
import Post from "./components/Post.vue";
import logo from "./assets/IonIosJournal.svg";
import type Entry from "./types/Entry";

const posts: Entry[] = reactive([]);

const manipularPost = (entradaPost: Entry): void => {
  posts.push(entradaPost);
};
</script>

<template>
  <header class="header">
    <img class="logo" :src="logo" alt="Logo 'My Journal'" />
    <h1 class="title">My Journal</h1>
  </header>
  <main>
    <Formulari @@create="manipularPost" />
    <section class="posts">
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <Post :info="post" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 50px;
}
</style>
