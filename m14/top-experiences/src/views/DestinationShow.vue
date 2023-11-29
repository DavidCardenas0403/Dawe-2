<script setup lang="ts">
import type Destination from "@/types/Destination";
import data from "../../data/data.json";
import router from "@/router";
import { computed, type ComputedRef } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";

const props = defineProps<{
  id: number;
}>();

const destination: ComputedRef<Destination | undefined> = computed(() => {
  return data.destinations.find((destination) => destination.id === props.id);
});

const goBack = (): void => {
  router.back();
};
</script>

<template>
  <main>
    <section class="destination">
      <h1>{{ destination?.name }}</h1>
      <button class="go-back" @click="goBack">Go back</button>
      <article class="destination-details">
        <img
          :src="`/images/${destination?.image}`"
          :alt="`Imagen de ${destination?.name}`"
        />
        <p>{{ destination?.description }}</p>
      </article>
    </section>

    <section class="experiences">
      <h2>{{ `Top Experiences in ${destination?.name}` }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination?.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
    </section>

    <router-view />
  </main>
</template>
