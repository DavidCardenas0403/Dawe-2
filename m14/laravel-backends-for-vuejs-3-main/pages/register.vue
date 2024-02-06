<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { RegisterForm } from "../types/RegisterForm";
import axios from "axios";

definePageMeta({
  layout: "centered",
});

const form: Ref<RegisterForm> = ref<RegisterForm>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
const register = async (form: RegisterForm) => {
  let responseRegister;
  try {
    responseRegister = await axios.post("/register", form);
    useRouter().push("/login");
  } catch (e) {
    console.error(`Ha ocurrido un error: ${e}`);
  }
  console.log(responseRegister);
};
</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="() => register(form)">
      <label>
        <div>Name</div>
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        <div>Email</div>
        <input v-model="form.email" type="email" />
      </label>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" />
      </label>

      <label>
        <div>Confirm Password</div>
        <input v-model="form.password_confirmation" type="password" />
      </label>

      <button type="submit" class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
../types/RegisterForm
