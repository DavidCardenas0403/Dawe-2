<script setup lang="ts">
import { ref, type Ref } from "vue";
let counter: Ref<number> = ref(0);

const incrementCounter = (): void => {
    counter.value++;
};

const decrementCounter = (): void => {
    counter.value--;
};

const resetCounter = (): void => {
    counter.value = 0;
};
</script>

<template>
    <div class="container">
        <h1>Pràctica reactivitat</h1>
        <h2>Autor: David Cárdenas</h2>
        <p :class="`${counter < 0 ? 'red' : counter == 0 ? 'black' : 'green'}`">
            {{ counter }}
        </p>

        <button @click="decrementCounter">-</button>
        <button @click="incrementCounter">+</button>
        <button @click="resetCounter">Reset</button>
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
