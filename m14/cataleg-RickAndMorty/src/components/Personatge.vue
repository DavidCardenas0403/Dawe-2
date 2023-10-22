<script setup lang="ts">
const props = defineProps({
    personatge: Object,
});
</script>

<template>
    <div class="personatge">
        <img
            class="imagen"
            :src="personatge?.image"
            :alt="`Imatge del personatge ${personatge?.name}`"
        />
        <div class="info">
            <h3>{{ personatge?.name }}</h3>
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
.imagen {
    width: 100%;
}
.lista {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.episodio::after {
    content: ", ";
}
.episodio:last-child::after {
    content: "";
}
</style>
