<script setup lang="ts">
import type { FormKitNode } from "@formkit/core";
import axios from "axios";
import { nanoid } from "nanoid";
import { LoginForm } from "~~/types";
import { handleInvalidForm } from "~~/utils";
definePageMeta({
  middleware: ["auth"],
});

async function createLink(payload: LoginForm, node?: FormKitNode) {
  try {
    console.log(payload);

    await axios.post("/links", {
      ...payload,
      short_link: nanoid(8),
    });
    useRouter().replace("/links");
  } catch (error) {
    handleInvalidForm(error, node);
  }
}
</script>
<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link" @submit="createLink">
    <FormKit type="url" name="full_link" label="Link" />
  </FormKit>
  <!--   <form>
    <label>
      <div>Link</div>
      <input type="text" name="full_link" />
    </label>
    <button class="btn">Create Link</button>
  </form> -->
</template>
