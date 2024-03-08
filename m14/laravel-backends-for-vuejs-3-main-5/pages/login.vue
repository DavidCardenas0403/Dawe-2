<script setup lang="ts">
import axios, { AxiosError } from "axios";
import { ref, type Ref } from "vue";
import type { LoginForm, ErrorResponse } from "../types/index";
import type { FormKitNode } from "@formkit/core";
import { handleInvalidForm } from "~~/utils";

const { login } = useAuth();

/* const form: Ref<LoginForm> = ref<LoginForm>({
  email: "",
  password: "",
}); */

const errors = ref({
  email: [],
  password: [],
});

/* const login2 = async (form: LoginForm) => {
  let resLogin;
  try {
    resLogin = await axios.post("/login", form);
    const userInfo = await axios.get("/user");
    console.log(userInfo);
    useRouter().push("/me");
  } catch (e: any) {
    if (e instanceof AxiosError) {
      errors.value.email = e.response?.data.errors.email;
      errors.value.password = e.response?.data.errors.password;
      console.log(e.response);
      console.error(`Ha ocurrido un error: ${e}`);
    }
    console.log(resLogin);
  }
  console.log(resLogin);
}; */

async function handleLogin(payload: LoginForm, node?: FormKitNode) {
  try {
    await login(payload);
  } catch (error) {
    handleInvalidForm(error, node);
  }
}

definePageMeta({
  middleware: ["guest"],
  layout: "centered",
});
</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <FormKit type="form" submit-label="Login" @submit="handleLogin">
      <FormKit label="Email" name="email" type="email" />
      <FormKit label="Password" name="password" type="password" />
    </FormKit>
    <!--     <form @submit.prevent="() => login2(form)">
      <label>
        <div>Email</div>
        <input v-model="form.email" type="text" />
      </label>
      <div v-if="errors.email.length !== 0">{{ errors.email[0] }}</div>

      <label>
        <div>Password</div>
        <input v-model="form.password" type="password" />
      </label>
      <div v-if="errors.password.length !== 0">{{ errors.password[0] }}</div>
      <button class="btn">Login</button>
    </form> -->

    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>
