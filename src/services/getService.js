import axios from "axios";
import { acceptHeader } from "../constants/endpoints";

export const getService = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: acceptHeader,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
