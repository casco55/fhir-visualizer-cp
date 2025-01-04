import { useEffect, useState } from "react";
import { getInfo } from "../actions/getInfo";

export const useInfo = ({ patientId, path }) => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!patientId) return;
    getInfo({ id: patientId, path, setInfo, setError, setLoading });
  }, [patientId]);

  useEffect(() => {
    if (!info) return;
    setTotal(info.total);
    setEntry(info.entry);
  }, [info]);

  return {
    info,
    error,
    total,
    entry,
    loading,
  };
};
