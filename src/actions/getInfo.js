import { baseUrl } from "../constants/endpoints";
import { getService } from "../services/getService";

export const getInfo = async ({ id, path, setInfo, setError }) => {
  try {
    const url = `${baseUrl}${path}${id}`;
    const response = await getService(url);
    setInfo(response);
  } catch (error) {
    setError("error al obtener la información");
  }
};
