import { ref } from "vue";

export default function usePost() {
  const posts = ref([]);
  const post = ref(null);
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  /* 
  Respostes de la part grupal

  2 - La funció fetch
  3 - Una variable reactiva que guardi tots els posts, és un array d'objectes. 
  Ha de ser reactiva perquè si canvia la url, també cambiaran els posts (ja que es crida a una altre a url amb el fetch)
  5 - Fa que la funció fetch sigui síncrona i no asíncrona, és a dir, espera a que la crida a la API es faci completament, i després continua executant 
  la resta del codi. Si fos asíncrona continuaria amb executant el codi, encara que la crida a la API no hagués acabat.
  */

  const llegirPosts = async () => {
    const response = await fetch(baseUrl + "posts");
    posts.value = await response.json();
  };

  const llegirPost = async (id) => {
    const response = await fetch(baseUrl + "posts/" + id);
    post.value = await response.json();
    console.log(post.value);
  };

  return { posts, llegirPosts, post, llegirPost };
}
