<script setup lang="ts">
import products from "../products/products.json";
import Product from "../components/Product.vue";
</script>
<template>
  <main class="main">
    <h1 class="title">Product List</h1>
    <section class="list">
      <Product
        v-for="(product, index) in products"
        :key="index"
        :info="product"
      />
    </section>
  </main>
</template>

<style scoped>
.title {
  margin-bottom: 50px;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 50px;
  align-items: center;
  margin-bottom: 50px;
}
</style>
