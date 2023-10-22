<script setup lang="ts">
import { ref, type Ref, watch } from "vue";
import Personatge from "@/components/Personatge.vue";
import BarraCerca from "@/components/BarraCerca.vue";
const personatges: Ref<Array<typeof Personatge>> = ref([]);
const url: Ref<string> = ref("https://rickandmortyapi.com/api/character");

const fetchData = async () => {
    const res = await fetch(url.value);
    const json = await res.json();
    personatges.value = json.results;
    console.log(personatges.value);
};

const filtrarUrl = (personatge: string): void => {
    url.value = `https://rickandmortyapi.com/api/character/?name=${personatge}`;
};

fetchData();
watch(url, fetchData);
</script>

<template>
    <main class="contenedor">
        <h1 class="titulo">Personatges Rick and Morty</h1>
        <BarraCerca @search="filtrarUrl" />
        <section class="personatges">
            <Personatge
                v-for="(personatge, index) in personatges"
                :key="index"
                :personatge="personatge"
            />
        </section>
    </main>
</template>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo {
    margin: 2rem;
}

.personatges {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 4rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    margin: 1.5rem 0;
}
</style>
