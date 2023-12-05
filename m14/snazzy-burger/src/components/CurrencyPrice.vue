<script setup lang="ts">
import { computed, inject, type Ref } from "vue";
import type { Currency } from "@/types/Currency";

const props = defineProps<{
  price: number;
}>();
const currency: Ref<Currency> | undefined = inject("currency");

//0.86, 1.09
const price = computed(() => {
  switch (currency?.value) {
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
  <span>{{ `${price}${currency}` }}</span>
</template>
