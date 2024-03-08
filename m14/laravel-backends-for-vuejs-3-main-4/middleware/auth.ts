import axios, { AxiosError } from "axios";
import { ref } from "vue";

const { user, initUser } = useAuth();
export default defineNuxtRouteMiddleware(async (to, from) => {
  await initUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});
