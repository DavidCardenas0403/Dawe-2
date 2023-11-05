<script setup lang="ts">
import router from "@/router";
</script>
<template>
  <h1>{{ `Detail of product ${router.currentRoute.value.params?.id}` }}</h1>
</template>
