import axios from "axios";

const baseURL = "http://localhost:9000/api/admin/";

export const register = async (user) => {
  try {
    const response = await axios.post(baseURL + "register", {
      user,
    });

    return response;
  } catch (error) {
    console.error("An error occurred during registration:", error.message);
    // Handle the error (e.g., network failure)
  }
};

export const login = async (user) => {
  try {
    const response = await axios.post(baseURL + "login", {
      user,
    });

    return response;
  } catch (error) {
    console.error("An error occurred during registration:", error.message);
    // Handle the error (e.g., network failure)
  }
};