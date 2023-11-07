<script setup lang="ts">
import { ref, type Ref } from "vue";
const postText: Ref<string> = ref("");
const handleSubmit = (e: Event): void => {
  e.preventDefault();
};
</script>

<template>
  <form class="form" @submit="(e) => handleSubmit(e)" novalidate>
    <textarea
      class="textarea"
      v-model="postText"
      name="post"
      id="post"
      cols="60"
      rows="7"
      placeholder="Escriu el teu post"
      maxlength="280"
    >
    </textarea>
    <div class="emojis"></div>
    <p>{{ `${postText.length}/280` }}</p>
    <button class="button" type="submit">Remember</button>
  </form>
</template>

<style scoped>
.textarea {
  resize: none;
}
</style>
