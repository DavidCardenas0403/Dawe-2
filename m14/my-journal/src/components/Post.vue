<script setup lang="ts">
import type Entry from "@/types/Entry";
import happy from "../assets/icons/happy.svg";
import type User from "@/types/User";

const user: User = {
  id: 1,
  username: "David Cárdenas",
};

defineProps<{
  info: Entry;
}>();

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses comienzan desde 0
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
};
</script>

<template>
  <article class="post">
    <div class="emoji_description">
      <img
        class="emoji"
        :src="`/src/assets/icons/${info.emoji}.svg`"
        :alt="`Emoji ${info.emoji}`"
      />
      <p class="text">
        {{ info.text }}
      </p>
    </div>
    <p class="date">
      {{ formatDate(info.date) }} |
      <span class="username">{{ user.username }}</span>
    </p>
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
  align-items: center;
  gap: 15px;
}

.emoji {
  width: 60px;
}

.text {
  width: 80%;
  word-break: break-all;
}

.date {
  align-self: flex-end;
  color: rgb(4, 121, 76);
}
.username {
  color: rgb(0, 170, 105);
}
</style>
