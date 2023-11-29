<script setup lang="ts">
import data from "../../data/data.json";
import type Destination from "@/types/Destination";
import Experience from "@/components/Experience.vue";

const destinations: Destination[] = data.destinations;
</script>

<template>
  <main class="home">
    <h1>All destinations</h1>
    <section class="destinations">
      <Experience
        v-for="destination in destinations"
        :key="destination.id"
        :info="destination"
      />
    </section>
  </main>
</template>
