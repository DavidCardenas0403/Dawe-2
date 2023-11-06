<script setup lang="ts">
import router from "@/router";
import Product from "@/components/Product.vue";
import productes from "../products/products.json";

const filtre: string =
  router.currentRoute.value.query.nom?.toString().trim().toLocaleLowerCase() ||
  "";

const resultat = productes.filter((prod) =>
  prod.name.toLocaleLowerCase().trim().includes(filtre)
);
</script>

<template>
  <main class="resultat">
    <h1 class="title">Resultat</h1>
    <section class="list">
      <Product
        v-for="(product, index) in resultat"
        :key="index"
        :info="product"
      />
    </section>
  </main>
</template>

<style scoped>
.resultat {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 50px;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 50px;
  align-items: center;
  margin-bottom: 50px;
}
</style>
