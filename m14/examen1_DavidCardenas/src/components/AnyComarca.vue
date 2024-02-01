<script setup>
import { computed } from "vue";

const props = defineProps(["infoAny"]);

const consumDomestic = computed(() =>
  ((props.infoAny.dom_stic_xarxa * 100) / props.infoAny.total).toFixed(2)
);

const consumActivitatsEcon = computed(() =>
  (
    (props.infoAny.activitats_econ_miques_i * 100) /
    props.infoAny.total
  ).toFixed(2)
);
</script>

<template>
  <h2>Any {{ infoAny.any }}</h2>
  <ul>
    <li>Població: {{ infoAny.poblaci }}</li>
    <li>Consum domèstic %: {{ consumDomestic }}</li>
    <li>Consum d'activitats econòmiques %: {{ consumActivitatsEcon }}</li>
    <li>Total: {{ infoAny.total }}</li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
