<script setup>
/*
-----------------------------------------
import { useRouter } from "vue-router"; 
const router = useRouter()
router.back() --- PARA REDIRIGIR A LA RUTA ANTERIOR
router.push({ --- PARA REDIRIGIR A OTRA RUTA MEDIANTE JS
  path: "/detalle",
  name: "detalle",
  query: {nom: id.value}
})
----------------------------------------
import router from "@/router" --- archivo js del router (index.js)

*/
import { ref } from "vue";
import Searcher from "@/components/Searcher.vue";
import Todo from "@/components/Todo.vue";
import axios from "axios";

const todos = ref({});

const fetchInfo = async (param) => {
  const fetchedInfo = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${param}`
  );
  todos.value = fetchedInfo.data;
};

fetchInfo(1);
</script>

<template>
  <main>
    <ul>
      <li>
        Desenvolupa aquest projecte Vue 3 amb composition api script setup. No
        pots fer servir qualsevol altra opció sintàctica.
      </li>
      <li>
        Els estils que veus en aquest enunciat són orientatius, no cal que facis
        servir els mateixos estils, no tindrà cap efecte a la nota final.
      </li>
      <li>
        Es valorarà positivament que facis servir els elements HTML de forma
        semàntica i respectis la distribució dels elements tal com veus a
        l'enunciat.
      </li>
    </ul>
    <Searcher @@id="(param) => fetchInfo(param)" />

    <ul>
      <Todo v-for="(todo, index) in todos" :todo="todo" :key="index" />
    </ul>
  </main>
</template>
