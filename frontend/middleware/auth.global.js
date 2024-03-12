import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("customer-token");
  const adminToken = useCookie("admin-token");

  if (token.value) {
    authenticated.value = true;
  }

  // if (token.value && to?.name == "login") {
  //   return navigateTo("/");
  // }

  // if (!token.value && to?.name !== "login") {
  //   return navigateTo("/login");
  // }

  if (adminToken.value) {
    authenticated.value = true;
  }

  // if (adminToken.value && to?.name == "admin-login") {
  //   return navigateTo("/");
  // }

  // if (!adminToken.value && to?.name !== "admin-login") {
  //   return navigateTo("/login");
  // }
});
