<script setup lang="ts">
import data from "../../data/data.json";
import type Destination from "@/types/Destination";
import Experience from "@/components/Experience.vue";

const destinations: Destination[] = data.destinations;
</script>

<template>
  <main>
    <h1>All destinations</h1>
    <section>
      <Experience
        v-for="destination in destinations"
        :key="destination.id"
        :info="destination"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}

section {
  display: flex;
  justify-content: space-evenly;
}
</style>
