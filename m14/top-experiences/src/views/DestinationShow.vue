<script setup lang="ts">
import type Destination from "@/types/Destination";
import data from "../../data/data.json";
import router from "@/router";
import { ref, type Ref, computed } from "vue";
import ExperienceShow from "./ExperienceShow.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";

const props = defineProps<{
  id: number;
}>();

const destination = computed(() => {
  return data.destinations.find((destination) => destination.id === props.id);
});

const goBack = (): void => {
  router.back();
};
</script>

<template>
  <main>
    <section>
      <h1>{{ destination?.name }}</h1>
      <button @click="goBack">Go Back</button>
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
        <ExperienceCard
          v-for="experience in destination?.experiences"
          :key="experience.slug"
          :experience="experience"
        />
      </div>
    </section>

    <section>
      <ExperienceShow />
    </section>
  </main>
</template>
