<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
    personatge: Object,
});
</script>

<template>
    <div class="personatge">
        <router-link
            :to="{ name: 'detall', params: { id: `${personatge?.id}` } }"
        >
            <img
                class="imagen"
                :src="personatge?.image"
                :alt="`Imatge del personatge ${personatge?.name}`"
            />
        </router-link>

        <div class="info">
            <router-link
                class="nombre"
                :to="{ name: 'detall', params: { id: `${personatge?.id}` } }"
            >
                {{ personatge?.name }}
            </router-link>
            <h4>Episodis:</h4>
            <ul class="lista">
                <li
                    v-for="(episodi, index) in personatge?.episode"
                    :key="index"
                    class="episodio"
                >
                    {{ episodi.slice(40) }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.personatge {
    width: 20%;
}
.nombre {
    color: rgb(16, 96, 161);
    text-decoration: none;
    font-weight: bold;
}
.imagen {
    width: 100%;
}
.lista {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.episodio::after {
    content: ", ";
}
.episodio:last-child::after {
    content: "";
}
</style>
