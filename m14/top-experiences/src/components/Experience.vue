<script setup lang="ts">
import { RouterLink } from "vue-router";
import type Destination from "@/types/Destination";
defineProps<{
  info: Destination;
}>();
</script>

<template>
  <router-link :to="`/destination/${info.id}/${info.slug}`">
    <article>
      <h2>{{ info.name }}</h2>
      <img :src="`/images/${info.image}`" :alt="`Imagen de ${info.name}`" />
    </article>
  </router-link>
</template>
