<script setup lang="ts">
import { reactive } from "vue";
import Formulari from "./components/Formulari.vue";
import Post from "./components/Post.vue";
import logo from "./assets/IonIosJournal.svg";
import type Entry from "./types/Entry";

const posts: Entry[] = reactive([]);

const manipularPost = (entradaPost: Entry): void => {
  posts.unshift(entradaPost);
};
</script>

<template>
  <main class="main">
    <header class="header">
      <img class="logo" :src="logo" alt="Logo 'My Journal'" />
      <h1 class="title">My Journal</h1>
    </header>

    <Formulari @@create="manipularPost" />
    <section class="posts">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <Post :info="post" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.main {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.logo {
  width: 65px;
}

.title {
  font-size: 2.2rem;
  font-weight: 600;
}

.posts {
  width: 30%;
  max-height: 45vh;
  margin-top: 10px;
  overflow-y: auto;
  border-radius: 5px;
}

.posts > ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
