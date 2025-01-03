import { useEffect, useState } from "react";
import { getInfo } from "../actions/getInfo";

export const useInfo = ({ patientId, path }) => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!patientId) return;
    getInfo({ id: patientId, path, setInfo, setError });
  }, [patientId]);

  return {
    info,
    error,
  };
};
