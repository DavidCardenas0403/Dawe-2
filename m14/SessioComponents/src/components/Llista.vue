<script setup lang="ts">
import { ref, type Ref } from "vue";

const novaTasca: Ref<string> = ref("");
const tasques: Ref<Array<string>> = ref([]);

const afegirTasca = (): void => {
    if (novaTasca.value.trim() !== "") {
        tasques.value.push(novaTasca.value);
        novaTasca.value = "";
    }
};

const eliminarTasca = (index: number) => {
    tasques.value.splice(index, 1);
};
</script>

<template>
    <div>
        <input
            v-model="novaTasca"
            @keyup.enter="afegirTasca"
            type="text"
            placeholder="Nova tasca"
        />
        <button @click="afegirTasca">Afegir tasca</button>
    </div>
    <ul>
        <li v-for="(tasca, index) in tasques" :key="index">
            {{ tasca }}
            <button @click="() => eliminarTasca(index)">X</button>
        </li>
    </ul>
</template>
