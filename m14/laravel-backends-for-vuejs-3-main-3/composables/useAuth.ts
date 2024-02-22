import axios from "axios";
import { ref } from "vue";
import type { LoginForm, RegisterForm, User } from "~~/types/index.ts";

const user = ref<User | null>(null);
/* 
interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: Date | null;
  two_factor_secret: string | null;
  two_factor_recovery_codes: string | null;
  created_at: Date | null;
  updated_at: Date | null;
}
 */
export const useAuth = () => {
  async function login(payload: LoginForm) {
    await axios.post("/login", payload);
    useRouter().push("/me");
  }

  async function register(payload: RegisterForm) {
    await axios.post("/register", payload);
    useRouter().push("/login");
  }

  async function logout() {
    await axios.post("/logout");
    user.value = null;
    useRouter().replace("/login");
  }

  async function getUser(): Promise<User | null> {
    if (user.value) return user.value;
    try {
      const res = await axios.get("/user");
      const user = res.data;
      return {
        ...user,
        created_at: new Date(user.created_at),
        updated_at: new Date(user.updated_at),
        email_verified_at: user.email_verified_at
          ? new Date(user.email_verified_at)
          : null,
      };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function initUser() {
    user.value = await getUser();
  }
  return { login, register, logout, getUser, initUser, user };
};
