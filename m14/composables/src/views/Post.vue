<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import usePost from "../composables/usePost.js";
import useUser from "../composables/useUser.js";
const { llegirPost, post } = usePost();
const { llegirUser, user } = useUser();
const router = useRoute();

const getPost = async () => {
  await llegirPost(router.params.id);
};

getPost();

llegirUser(post.value.userId);
</script>
