<script setup lang="ts">
import { ref, type Ref, watch } from "vue";
const emit = defineEmits(["search"]);
const personatge: Ref<string> = ref("");

const emitirEvento = () => {
    emit("search", personatge.value);
};

watch(personatge, emitirEvento);
</script>

<template>
    <div>
        <input
            v-model="personatge"
            type="text"
            placeholder="Cerca un personatge"
        />
        <button @click="$emit('search', personatge)">Cerca</button>
    </div>
</template>
