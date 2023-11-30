<script setup lang="ts">
import { computed } from "vue";
import type { Currency } from "@/types/Currency";

const props = defineProps<{
  price: number;
  currency: Currency;
}>();
//0.86, 1.09
const price = computed(() => {
  switch (props.currency) {
    case "€":
      return props.price;
    case "$":
      return (props.price * 1.09).toFixed(2);
    case "£":
      return (props.price * 0.86).toFixed(2);
  }
});
</script>

<template>
  <span>{{ `${price}${props.currency}` }}</span>
</template>
