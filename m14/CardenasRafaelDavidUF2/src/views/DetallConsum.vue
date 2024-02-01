<script setup>
import useAxios from "../composables/useAxios";
import router from "@/router";
import AnyComarca from "@/components/AnyComarca.vue";

const { comarca, fetchOne, goToConsum } = useAxios();

fetchOne(router.currentRoute.value.params.id[0]);
</script>

<template>
  <h1>{{ comarca[0].comarca.split(",")[0] }}</h1>
  <AnyComarca v-for="(any, index) in comarca" :key="index" :infoAny="any" />
  <button @click="goToConsum">Tornar</button>
</template>

<style scoped></style>
