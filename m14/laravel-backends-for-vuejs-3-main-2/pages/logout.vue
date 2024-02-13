<template>
  <div>Logging Out...</div>
</template>

<script setup>
import axios from "axios";

const { logout } = useAuth();

logout();
</script>
