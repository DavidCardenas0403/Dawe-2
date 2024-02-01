<script setup>
import { ref } from "vue";
const emit = defineEmits(["@id"]);

const id = ref(1);

const emitId = () => {
  emit("@id", id.value);
};
</script>

<template>
  <input type="number" v-model="id" @change="/* $emit('@id', id) */ emitId" />
</template>
<style></style>
