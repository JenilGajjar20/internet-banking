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
    // CUSTOMER AUTHENTICATION
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("data: ", data);
      localStorage.setItem("customer-data", JSON.stringify(data));

      if (data.data.role === "customer") {
        const token = data.token;
        localStorage.setItem("customer-token", token);
        this.authenticated = true;
      }
    },
    logOutCustomer() {
      localStorage.removeItem("customer-data");
      this.authenticated = false;
    },

    // ADMIN AUTHENTICATION
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

      if (data.data.role === "admin") {
        const token = useCookie("admin-token");
        token.value = data?.data?.token;
        console.log("token: ", token.value);
        this.authenticated = true;
      }
    },
    logOutAdmin() {
      const token = useCookie("admin-token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
