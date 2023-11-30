<script setup lang="ts">
import type Product from "../types/Product.ts";
import type { Currency } from "@/types/Currency";
import CurrencyPrice from "./CurrencyPrice.vue";
defineProps<{
  info: Product;
  currency: Currency;
}>();
</script>

<template>
  <article>
    <p>{{ info.name }}</p>
    <CurrencyPrice :price="info.price" :currency="currency" />
    <button type="button">Add to Cart</button>
  </article>
</template>

<style scoped>
article {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
</style>
