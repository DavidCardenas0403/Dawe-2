<template>
  <p><strong>User Name:</strong> {{ name }}</p>
  <p><strong>User Email:</strong> {{ email }}</p>
</template>

<script setup>
import axios from "axios";

const name = ref("");
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

getUserInfo();
</script>
