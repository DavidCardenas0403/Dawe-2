<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { RegisterForm } from "../types/RegisterForm";
import type { FormKitNode } from "@formkit/core";
import axios, { AxiosError } from "axios";
import { handleInvalidForm } from "~~/utils";

const { register } = useAuth();

definePageMeta({
  middleware: ["guest"],
  layout: "centered",
});

const form: Ref<RegisterForm> = ref<RegisterForm>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

/* const register2 = async (form: RegisterForm) => {
  let responseRegister;
  try {
    responseRegister = await axios.post("/register", form);
    useRouter().push("/login");
  } catch (e) {
    console.error(`Ha ocurrido un error: ${e}`);
  }
  console.log(responseRegister);
}; */

async function handleRegister(payload: RegisterForm, node?: FormKitNode) {
  try {
    await register(payload);
  } catch (error) {
    handleInvalidForm(error, node);
  }
}
</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <FormKit type="form" submit-label="Register" @submit="handleRegister">
      <FormKit type="text" name="name" label="Name" />
      <FormKit type="email" name="email" label="Email" />
      <FormKit type="password" name="password" label="Password" />
      <FormKit
        type="password"
        name="password_confirmation"
        label="Confirm Password"
      />
    </FormKit>
    <!--     <form @submit.prevent="() => register(form)">
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
    </form> -->

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
../types/RegisterForm
