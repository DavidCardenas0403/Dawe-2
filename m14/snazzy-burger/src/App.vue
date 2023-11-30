<script setup lang="ts">
import { ref, type Ref, reactive } from "vue";
const orderName: Ref<string> = ref("The Snazzy Burger");
const products = reactive([
  { name: "Hamburger 🍔.", price: 5 }, //Este precio es en euros (€)
  { name: "Cheeseburger 🧀", price: 6 },
  { name: "Impossible Burger 🥕", price: 7 },
  { name: "Fries 🍟", price: 2 },
]);
</script>

<template>
  <header>
    <h1>{{ orderName }}</h1>

    <section>
      <input v-model="orderName" type="text" />
      <button type="button">Place Order</button>
    </section>
  </header>

  <main>
    <section>
      <Comanda
        v-for="(product, index) in products"
        :info="product"
        :key="index"
      />
    </section>
  </main>
</template>

<style scoped>
header,
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
</style>
