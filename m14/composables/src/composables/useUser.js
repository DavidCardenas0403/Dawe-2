import { ref } from "vue";

export default function useUser() {
  const user = ref();
  const baseUrl = "https://jsonplaceholder.typicode.com/";

  const llegirUser = async (id) => {
    const response = await fetch(baseUrl + "users/" + id);
    console.log(response);
    user.value = await response.json();
    console.log(user.value);
  };

  return { user, llegirUser };
}
