<script setup lang="ts">
import type Experience from "@/types/Experience";
const props = defineProps<{
  experience: Experience;
}>();
</script>

<template>
  <article class="card">
    <img
      :src="`/images/${experience.image}`"
      :alt="`Imagen de ${experience.name}`"
    />
    <p class="card__text">{{ experience.name }}</p>
  </article>
</template>
