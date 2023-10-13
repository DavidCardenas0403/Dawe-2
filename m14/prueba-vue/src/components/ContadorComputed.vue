<script setup lang="ts">
import { ref, type Ref, computed } from "vue";
let counter: Ref<number> = ref(0);
const favNumbers: Ref<number[]> = ref([]);

const incrementCounter = (): void => {
    counter.value++;
};

const decrementCounter = (): void => {
    counter.value--;
};

const resetCounter = (): void => {
    counter.value = 0;
};

const classCounter = computed((): string => {
    if (counter.value === 0) {
        return "text-dark";
    }
    return counter.value > 0 ? "text-success" : "text-danger";
});

const addNumberToFavs = () => {
    favNumbers.value.push(counter.value);
};
</script>

<template>
    <div class="container w-25">
        <h1>Pràctica botons</h1>
        <h2>Autor: David Cárdenas</h2>
        <p :class="classCounter">
            {{ counter }}
        </p>

        <button
            @click="decrementCounter"
            class="btn btn-danger border border-dark border-2 py-2 px-3"
        >
            -
        </button>
        <button
            @click="incrementCounter"
            class="btn btn-success border border-dark border-2 py-2 px-3"
        >
            +
        </button>
        <button
            @click="resetCounter"
            class="btn btn-light border border-dark border-2 p-2"
        >
            Reset
        </button>
        <button
            :disabled="favNumbers.includes(counter)"
            @click="addNumberToFavs"
            class="btn btn-primary border border-dark border-2 p-2"
        >
            Add
        </button>

        <h3 class="mt-4">Números Favorits</h3>
        <hr />
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="(number, index) in favNumbers"
                :key="index"
            >
                {{ number }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
h2 {
    font-size: 1.2rem;
}
.container {
    text-align: center;
}
.red {
    color: red;
}
.black {
    color: black;
}
.green {
    color: green;
}
.container > p {
    font-size: 1.8rem;
    font-weight: bold;
}
button {
    border-radius: 20px;
    padding: 0 0.5rem;
}
</style>
