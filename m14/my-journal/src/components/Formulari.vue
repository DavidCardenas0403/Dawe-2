<script setup lang="ts">
import type Entry from "@/types/Entry";
import { ref, type Ref } from "vue";
const postText: Ref<string> = ref("");
defineEmits<{
  "@create": [post: Entry];
}>();
</script>

<template>
  <form
    class="form"
    @submit.prevent="
      () =>
        $emit('@create', {
          id: 1,
          text: postText,
          emoji: 'happy',
          date: new Date(),
        })
    "
  >
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
    <p class="characters">{{ `${postText.length} / 280` }}</p>
    <button class="button" type="submit">Remember</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgb(228, 228, 228);
  border-radius: 5px;
  gap: 5px;
  width: 30%;
}
.textarea {
  resize: none;
  border-radius: 5px;
  padding: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1rem;
  border: 0;
}

.textarea:focus {
  outline: none;
}
.characters {
  color: black;
  cursor: default;
}

.button {
  width: fit-content;
  align-self: flex-end;
  border-radius: 3px;
  border: 0;
  padding: 7px 12px;
  background-color: rgb(4, 121, 76);
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
}

.button:hover {
  background-color: rgb(4, 107, 68);
}
</style>
