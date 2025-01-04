import { baseUrl } from "../constants/endpoints";
import { getService } from "../services/getService";

export const getInfo = async ({ id, path, setInfo, setError, setLoading }) => {
  try {
    setLoading(true);
    const url = `${baseUrl}${path}${id}`;
    const response = await getService(url);
    setInfo(response);
    setError(false);
    setLoading(false);
  } catch (error) {
    setError(true);
    setLoading(false);
  }
};
