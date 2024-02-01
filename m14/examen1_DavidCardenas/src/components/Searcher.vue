<script setup>
import { ref } from "vue";
const emit = defineEmits(["@id"]);

const id = ref(1);
</script>

<template>
  <input type="number" v-model="id" @change="$emit('@id', id)" />
</template>
<style></style>
