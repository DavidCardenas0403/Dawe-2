<script setup lang="ts">
import type Entry from "@/types/Entry";

defineProps<{
  info: Entry;
}>();
</script>

<template>
  <article class="post">
    <div class="emoji_description">
      <img class="emoji" src="" :alt="`Emoji ${info.emoji}`" />
      <p></p>
    </div>
    <p class="date"></p>
  </article>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgb(228, 228, 228);
  width: 100%;
  border-radius: 5px;
}
.emoji_description {
  display: flex;
  gap: 10px;
}

.emoji {
  width: 70px;
}

.date {
  align-self: flex-end;
}
</style>
