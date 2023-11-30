<script setup lang="ts">
import { ref, type Ref, reactive } from "vue";
import type Product from "./types/Product";
import type { Currency } from "./types/Currency";
import Comanda from "./components/Comanda.vue";
const orderName: Ref<string> = ref("The Snazzy Burger");
const currency: Ref<Currency> = ref("€");
const products: Product[] = reactive([
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
    <div>
      <label for="currency">Currency</label>
      <select v-model="currency" name="currency" id="currency">
        <option value="€">EUR (€)</option>
        <option value="$">USD ($)</option>
        <option value="£">GBP (£)</option>
      </select>
    </div>
    <section class="productes">
      <Comanda
        v-for="(product, index) in products"
        :info="product"
        :currency="currency"
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

.productes {
  align-items: flex-start;
}

main {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

div {
  display: flex;
  gap: 5px;
}
</style>
