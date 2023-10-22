<script setup lang="ts">
import { ref, type Ref } from "vue";
const contador: Ref<number> = ref(0);

const incrementarContador = (): void => {
    contador.value++;
};
</script>

<template>
    <button @click="incrementarContador">
        {{ `You clicked me ${contador} times.` }}
    </button>
</template>
