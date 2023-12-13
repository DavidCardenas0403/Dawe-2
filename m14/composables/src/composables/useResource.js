import { ref } from "vue";

export default function useResource(request = "posts") {
  // L'argument request pot ser o "posts" o "users", i per defecte serà "posts"
  const listInfo = ref([]);
  const info = ref(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/";

  const llegirMolts = async () => {
    const response = await fetch(baseUrl + request);
    listInfo.value = await response.json();
  };

  const llegirUn = async (id) => {
    const response = await fetch(baseUrl + `${request}/` + id);
    info.value = await response.json();
    console.log(info.value);
  };

  return { listInfo, llegirMolts, info, llegirUn };
}
