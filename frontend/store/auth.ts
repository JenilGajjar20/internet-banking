import { defineStore } from "pinia";
import axios from "axios";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("data: ", data.data);
      this.loading = pending;

      if (data.data.role === "admin") {
        const token = useCookie("admin-token");
        token.value = data?.data?.token;
        console.log("token: ", token.value);
        this.authenticated = true;
      }
    },
    async authenticateAdmin({ email, password }: UserPayloadInterface) {
      const { data, pending }: any = await axios.post(
        "http://localhost:3001/api/auth/admin/login",
        {
          email,
          password,
        }
      );
      console.log("data: ", data.data);
      this.loading = pending;

      if (data.data.role === "customer") {
        const token = useCookie("customer-token");
        token.value = data?.data?.token;
        console.log("token: ", token.value);
        this.authenticated = true;
      }
    },
    logOutCustomer() {
      const token = useCookie("customer-token");
      this.authenticated = false;
      token.value = null;
    },
    logOutAdmin() {
      const token = useCookie("admin-token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
