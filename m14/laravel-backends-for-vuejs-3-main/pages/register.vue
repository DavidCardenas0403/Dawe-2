<script setup lang="ts">
import {ref, type Ref} from "vue"
import type {Form} from "../types/Form"
import axios from "axios"
definePageMeta({
  layout: "centered",
});

const form = ref<Form>({
    name: "",
    email:"",
    password:"",
    confPassword:""
})
const handleSubmit = async (form:Form) => {
  let responseRegister
  try {
    responseRegister = await axios.post("http://localhost/api/register")
  } catch (e) {
    console.error(`Ha ocurrido un error: ${e}`)
  }
}
</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="() => handleSubmit(form)">
      <label>
        <div>Name</div>
        <input v-model="form.name" type="text"  required/>
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
        <input v-model="form.confPassword" type="password" />
      </label>

      <button type="submit" class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
  </div>
</template>
