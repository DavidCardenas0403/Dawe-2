<script setup lang="ts">
import type Destination from "@/types/Destination";
import data from "data/data.json";
import router from "@/router";
import { ref, type Ref } from "vue";
import type { RouteParams } from "vue-router";

const params: RouteParams = router.currentRoute.value.params;
const destination: Ref<Destination | null> = ref(null);

const fetchData = (data: { destinations: Array<Destination> }): void => {
  destination.value = data.destinations.filter(
    (destination) => destination.id === parseInt(params?.id as string)
  )[0];
};
</script>

<template>
  <main>
    <h1>Destination Show</h1>
    {{ router.currentRoute.value.fullPath }}
  </main>
</template>
