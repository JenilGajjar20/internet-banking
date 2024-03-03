import axios from "axios";

const URL = "http://localhost:3001/api";

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${URL}/customers`);
    return response.data;
  } catch (error) {
    console.log("Error fetching customers: ", error);
  }
};
