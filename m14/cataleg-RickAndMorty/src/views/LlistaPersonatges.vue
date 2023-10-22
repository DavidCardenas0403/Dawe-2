<script setup lang="ts">
import { ref, type Ref, watch } from "vue";
import Personatge from "@/components/Personatge.vue";
import BarraCerca from "@/components/BarraCerca.vue";
const personatges: Ref<Array<typeof Personatge>> = ref([]);
const page: Ref<number> = ref(1);
const url: Ref<string> = ref(`https://rickandmortyapi.com/api/character`);

const fetchData = async (): Promise<void> => {
    const res = await fetch(url.value);
    const json = await res.json();
    personatges.value = json.results;
    console.log(personatges.value);
};

const filtrarUrl = (personatge: string): void => {
    url.value = `https://rickandmortyapi.com/api/character/?name=${personatge}`;
};

fetchData();
watch(
    page,
    () =>
        (url.value = `https://rickandmortyapi.com/api/character/?page=${page.value}`)
);
watch(url, fetchData);
</script>

<template>
    <main class="contenedor">
        <h1 class="titulo">Personatges Rick and Morty</h1>
        <BarraCerca @search="filtrarUrl" />
        <h3 class="page">Page {{ page }}</h3>
        <div class="botones">
            <button v-if="page > 1" @click="page--">Previous page</button>
            <button v-if="page < 42" @click="page++">Next page</button>
        </div>

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

.page {
    margin-top: 1rem;
}

.botones {
    display: flex;
    gap: 1.5rem;
    margin: 1.5rem;
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
