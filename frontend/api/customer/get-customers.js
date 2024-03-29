import axios from "axios";

const URL = "http://localhost:3001/api";

export const getCustomers = async () => {
  try {
    const adminToken = localStorage.getItem("admin-token");

    if (!adminToken) {
      return {
        redirect: "admin/login",
      };
    }

    const response = await axios.get(`${URL}/customers`, {
      headers: {
        "Authorization ": "Bearer " + adminToken,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
