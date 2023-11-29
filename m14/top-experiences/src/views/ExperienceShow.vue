<script setup lang="ts">
import { computed } from "vue";
import data from "../../data/data.json";
const props = defineProps<{
  id: number;
  experienceSlug: string;
}>();

const destination = computed(() => {
  return data.destinations.find((destination) => destination.id === props.id);
});

const experience = computed(() => {
  return destination.value?.experiences.find(
    (experience) => experience.slug === props.experienceSlug
  );
});
</script>

<template>
  <section>
    <h3>{{ experience?.name }}</h3>
    <img
      :src="`/images/${experience?.image}`"
      :alt="`Imagen de ${experience?.name}`"
    />
    <p>{{ experience?.description }}</p>
  </section>
</template>
