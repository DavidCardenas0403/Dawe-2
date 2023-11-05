<script setup lang="ts">
import { ref, type Ref, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const productSearched: Ref<string> = ref("");

const handleSearch = (): void => {
  router.push({
    path: "/resultat",
    name: "resultat",
    query: { nom: productSearched.value },
  });
};
</script>

<template>
  <main class="search">
    <h1 class="title">Search your product</h1>
    <div class="input-button">
      <form novalidate>
        <input
          class="input"
          v-model="productSearched"
          type="text"
          placeholder="Busca el nom del producte"
        />
        <button class="button" @click="handleSearch">Cerca</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.title {
  margin-bottom: 20px;
}

.input {
  height: 30px;
  width: 200px;
  border-radius: 10px;
  border: 0;
  padding: 10px;
}

input:focus {
  outline: 0;
}

.button {
  height: 30px;
  margin-left: 5px;
  border-radius: 10px;
  padding: 5px;
  border: 0;
}
</style>
