<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
let data = ref();
const fetchData = async (): Promise<void> => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${router.currentRoute.value.params?.id}`
    );
    const json = await res.json();
    data.value = json;
    console.log(data.value);
};

fetchData();
</script>

<template>
    <div class="contenedor">
        <router-link class="link" :to="{ name: 'personatges' }"
            >Llistat de personatges</router-link
        >
        <h1>{{ data.name }}</h1>
        <img :src="data.image" :alt="`Imagen de ${data.name}`" />
        <p><b>Status:</b> {{ data.status }}</p>
        <p><b>Species:</b> {{ data.species }}</p>
        <p><b>Gender:</b> {{ data.status }}</p>
        <p><b>Origin:</b> {{ data.origin.name }}</p>
        <p><b>Location:</b> {{ data.location.name }}</p>
        <b>Episodes:</b>
        <ul class="lista">
            <li
                v-for="(episodi, index) in data?.episode"
                :key="index"
                class="episodio"
            >
                {{ episodi.slice(40) }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.link {
    align-self: flex-start;
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;
}

.lista {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 25%;
}
.episodio::after {
    content: ", ";
}
.episodio:last-child::after {
    content: "";
}
</style>
