<script lang="ts" setup>
import data from "../../data/data.json";
import { RouterLink } from "vue-router";
import type Destination from "@/types/Destination";

const destinations: Destination[] = data.destinations;
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
  </nav>
</template>
