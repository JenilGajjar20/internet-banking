import axios from "axios";

const URL = "http://localhost:3001/api/transactions";

export const createTransaction = async () => {
  try {
    const response = await axios.post(`${URL}/new`);
    return response.data;
  } catch (err) {
    console.log("Error: ", err);
  }
};

const getTransactions = async () => {
  try {
    const token = localStorage.getItem("customer-token");
    if (!token) {
      return {
        redirect: "login",
      };
    }

    const response = await axios.get(`${URL}/all`, {
      headers: {
        "Authorization ": "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    // if (error.response && error.response.status === 401) {
    // }
  }
};

export default getTransactions;
