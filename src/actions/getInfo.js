import { baseUrl } from "../constants/endpoints";
import { getService } from "../services/getService";

export const getInfo = async ({ id, path, setInfo, setError }) => {
  try {
    const url = `${baseUrl}${path}${id}`;
    const response = await getService(url);
    setInfo(response);
    setError(false);
  } catch (error) {
    setError(true);
  }
};
