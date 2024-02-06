<template>
  <div>Logging Out...</div>
</template>

<script setup>
import axios from "axios";

const logout = async () => {
  await axios.post("/logout");
  useRouter().replace("/login");
};

logout();
</script>
