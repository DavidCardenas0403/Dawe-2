<script setup lang="ts">
import { RouterLink } from "vue-router";
import type Destination from "@/types/Destination";
defineProps<{
  info: Destination;
}>();
</script>

<template>
  <article>
    <router-link :to="`/destination/${info.id}/${info.slug}`">
      <h2>{{ info.name }}</h2>
    </router-link>
    <img :src="`/images/${info.image}`" :alt="`Imagen de ${info.name}`" />
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 23vw;
}
</style>
