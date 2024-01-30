<script>
import axios from "axios";
import { ref } from "vue";

const userInfo = ref({ name: "", email: "" });

const getUserInfo = async () => {
  let resUserInfo;
  try {
    resUserInfo = await axios.get("/user");
    userInfo.value = resUserInfo;
  } catch (e) {
    console.log(`Ha ocurrido un error: ${e}`);
  }
  console.log(resUserInfo);
};

getUserInfo();
</script>
<template>
  <p><strong>User Name:</strong>{{ userInfo.name }}</p>
  <p><strong>User Email:</strong>{{ userInfo.email }}</p>
</template>
