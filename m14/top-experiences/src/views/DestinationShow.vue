<script setup lang="ts">
import type Destination from "@/types/Destination";
import data from "../../data/data.json";
import router from "@/router";
import { ref, type Ref, computed } from "vue";
import type { RouteParams } from "vue-router";

const props = defineProps(["id"]);

const destination = computed(() => {
  return data.destinations.find((destination) => destination.id === props.id);
});

const params: RouteParams = router.currentRoute.value.params;
//const destination: Ref<Destination | null> = ref(null);

/* const fetchData = (data: { destinations: Array<Destination> }): void => {
  destination.value = data.destinations.filter(
    (destination) =>
      destination.id === parseInt(params?.id as string) &&
      destination.slug === params.slug.toString()
  )[0];
}; */
const goBack = (): void => {
  router.back();
};
</script>

<template>
  <main>
    <h1>{{ destination?.name }}</h1>
    <button @click="goBack">Go Back</button>
  </main>
</template>
