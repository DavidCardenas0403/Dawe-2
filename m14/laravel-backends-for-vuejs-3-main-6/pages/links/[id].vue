<script setup lang="ts">
import { handleInvalidForm } from "~~/utils";
import type { Link } from "../../types/index";
definePageMeta({
  middleware: ["auth"],
});

const { find, link, update } = useLinks();
await find(useRoute().params?.id[0]);

async function handleUpdate(payload: Partial<Link>, node?: FormKitNode) {
  try {
    await update(Number(useRoute().params.id), payload);
    useRouter().replace("/links");
  } catch (err) {
    handleInvalidForm(err, node);
  }
}
</script>

<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">
    <FormKit
      type="text"
      v-model="link.short_link"
      name="short_link"
      label="Short Link"
    />
    <FormKit
      type="url"
      v-model="link.full_link"
      name="full_link"
      label="Full Link"
    />
  </FormKit>
  <!--   <form>
    <label>
      <div>Short Link</div>
      <input type="text" />
    </label>

    <label>
      <div>Full Link</div>
      <input type="text" />
    </label>

    <button class="btn">Update Link</button>
  </form> -->
</template>
