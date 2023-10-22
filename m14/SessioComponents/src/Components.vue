<script setup lang="ts">
import Llista from "./components/Llista.vue";
import Boto from "./components/Boto.vue";
import Json from "./components/Json.vue";
</script>

<template>
    <main class="contenedor">
        <h1>Components sessió 1</h1>
        <h2>Autor: David Cárdenas</h2>
        <h3>Llistes</h3>
        <Llista></Llista>
        <h3>Botons</h3>
        <Boto></Boto>
        <Boto></Boto>
        <Boto></Boto>
        <h3>JSON</h3>
        <Json></Json>
    </main>
</template>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
