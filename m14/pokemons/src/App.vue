<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
import CercadorPokemon from "./components/CercadorPokemon.vue"
import LlistaPokemon from "./components/LlistaPokemon.vue"
const url: Ref<string> = ref("https://pokeapi.co/api/v2/pokemon")
</script>

<template>
    <CercadorPokemon />
    <LlistaPokemon :url="url" />
</template>

<style scoped></style>
