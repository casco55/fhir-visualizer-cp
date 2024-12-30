// src/components/Observation.jsx
import { observationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const Observation = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: observationPath,
  });
  console.log(info);
  console.log(error);
  return (
    <div>
      <p>Observations for {patientId}</p>
      {/* Add rendering of observation info here */}
    </div>
  );
};
