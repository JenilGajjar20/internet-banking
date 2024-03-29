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
      // console.log("data: ", data);
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
      const { data } = await axios.post(
        "http://localhost:3001/api/auth/admin/login",
        {
          email,
          password,
        }
      );
      console.log("data: ", data);
      localStorage.setItem("admin-data", JSON.stringify(data));

      if (data.data.role === "admin") {
        const adminToken = data.token;
        localStorage.setItem("admin-token", adminToken);
        console.log("token: ", adminToken);
      }
    },
    logOutAdmin() {
      localStorage.removeItem("admin-data");
      this.authenticated = false;
    },
  },
});
