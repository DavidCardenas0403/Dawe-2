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
    <Searcher @@id="(param) => fetchInfo(param)" />

    <ul>
      <Todo v-for="(todo, index) in todos" :todo="todo" :key="index" />
    </ul>
  </main>
</template>
