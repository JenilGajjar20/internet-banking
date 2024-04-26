import axios from "axios";

const URL = "http://localhost:3001/api/wallet";

export const getWalletByCustomerId = async (id) => {
  try {
    const token = localStorage.getItem("customer-token");
    if (!token) {
      return {
        redirect: "login",
      };
    }

    const response = await axios.get(`${URL}/${id}`, {
      headers: {
        "Authorization ": "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
