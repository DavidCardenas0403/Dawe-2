<script setup lang="ts">
import { ref, type Ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ContadorRef from "./components/ContadorRef.vue";
import ContadorComputed from "./components/ContadorComputed.vue";

const nom: string = "Vue en marxa";
const styleColors: string = "color:blue";
let counter: Ref<number> = ref(0);

const incrementCounter = (): void => {
    counter.value++;
};

const decrementCounter = (): void => {
    counter.value--;
};

const resetCounter = (): void => {
    counter.value = 0;
};
</script>

<template>
    <div>
        <h1 v-bind:style="styleColors">{{ nom }}</h1>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />

    <button
        @click.right.prevent="() => console.log('click derecho')"
        @click.left="() => console.log('click izquierdo')"
        @click.middle="() => console.log('click ratón')"
    >
        Botón
    </button>

    <h3 :class="`${counter < 0 ? 'red' : counter == 0 ? 'black' : 'green'}`">
        {{ counter }}
    </h3>

    <button @click="decrementCounter" class="btn btn-danger">-</button>
    <button @click="incrementCounter" class="btn btn-success">+</button>
    <button @click="resetCounter">Reset</button>

    <ContadorRef />
    <ContadorComputed />
</template>

<style scoped>
.red {
    color: red;
}

.black {
    color: black;
}

.green {
    color: green;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!-- <template>
  <div>
      <h2 :style="`${counter < 0 ? 'color: red' : counter == 0 ? 'color: white' : 'color: green'}`">{{ counter }}</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="reset">RESET</button>

      <button :disabled="favoritos.includes(counter)" @click="addFavs">ADD</button>

      <ul>
          <li :key="fav" v-for="fav in favoritos">{{ fav }}</li>
      </ul>
  </div>
</template>

<script lang="ts" setup>
  import { ref, type Ref } from 'vue';

  let counter: Ref<number> = ref(0);
  let favoritos: Ref<Array<number>> = ref([])

  const increment = () => {
      counter.value++;
  }
  const decrement = () => {
      counter.value--;
  }
  const reset = () => {
      counter.value = 0
  }
  const addFavs = () => {
      favoritos.value.push(counter.value)
  }
</script> -->
