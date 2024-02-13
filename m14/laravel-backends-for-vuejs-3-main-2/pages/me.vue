<script setup>
import axios from "axios";
definePageMeta({
  middleware: ["auth"],
});

const { user, initUser } = useAuth();

/* const name = ref("");
const email = ref("");

const getUserInfo = async () => {
  let resUserInfo;
  try {
    resUserInfo = await axios.get("/user");
    console.log(resUserInfo.data);
    name.value = resUserInfo.data?.name;
    email.value = resUserInfo.data?.email;
    console.log(name.value, email.value);
  } catch (e) {
    console.log(`Ha ocurrido un error: ${e}`);
  }
  console.log(resUserInfo);
};

getUserInfo(); */
initUser();
</script>
<template>
  <p><strong>User Name:</strong> {{ user.name }}</p>
  <p><strong>User Email:</strong> {{ user.email }}</p>
</template>
