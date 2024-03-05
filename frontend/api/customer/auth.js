import axios from "axios";

const URL = "http://localhost:3001/api";

export const register = async () => {
  try {
    const response = await axios.post(`${URL}/auth/register`);
    return response.data;
  } catch (err) {
    console.log("Error fetching customers: ", err);
  }
};
