<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { watch } from "vue";

import { useRoute } from "vue-router";
import usePost from "../composables/usePost.js";
import useUser from "../composables/useUser.js";
import useResource from "../composables/useResource.js";
//const { llegirPost, post } = usePost();
//const { llegirUser, user } = useUser();
const { llegirUn: llegirPost, info: post } = useResource("posts");
const { llegirUn: llegirUser, info: user } = useResource("users");

const router = useRoute();
llegirPost(router.params.id);

watch(
  () => ({ ...post.value }),
  () => llegirUser(post.value.userId)
);
</script>
