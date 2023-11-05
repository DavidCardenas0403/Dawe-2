<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  info: Object,
});
</script>

<template>
  <article class="product">
    <RouterLink class="container" :to="`/producte/${info?.id}`">
      <img
        class="img"
        :src="info?.img"
        :alt="`Imagen del producto ${info?.name}`"
      />
      <div class="info">
        <strong>{{ info?.name }}</strong>
        <p>{{ info?.price }}€</p>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>
.product {
  display: flex;
  height: 300px;
  width: 20%;
}

.product > a {
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.img {
  max-width: 80%;
  max-height: 70%;

  object-fit: contain;
}

.info {
  text-align: center;
}
</style>
