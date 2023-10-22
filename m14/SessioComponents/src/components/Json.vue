<script setup lang="ts">
import { ref, watch, type Ref } from "vue";

const todoId: Ref<number> = ref(1);
const todoData: Ref<string> = ref("");

async function fetchData() {
    todoData.value = "";
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    );
    todoData.value = await res.json();
}
fetchData();
watch(todoId, fetchData);
</script>
<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
</template>
