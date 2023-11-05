<script setup lang="ts">
import router from "@/router";
import productes from "../products/products.json";

const producte = productes.filter(
  (prod) => prod.id === router.currentRoute.value.params?.id
)[0];
</script>
<template>
  <main class="detail">
    <h1>{{ producte.name }}</h1>
    <img
      class="img"
      :src="producte.img"
      :alt="`Imatge del producte ${producte.name}`"
    />
    <p class="price">Preu: {{ producte.price }}€</p>
    <p class="description">{{ producte.description }}</p>
  </main>
</template>

<style scoped>
.detail {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.img {
  width: 20%;
  max-height: 20%;
  object-fit: contain;
}

.price {
  font-size: 25px;
  font-weight: 700;
}

.description {
  font-size: 20px;
}
</style>
