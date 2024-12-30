// src/components/MedicationStatement.jsx
import { medicationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const MedicationStatement = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: medicationPath,
  });
  console.log(info);
  console.log(error);
  return (
    <div>
      <p>Medications for {patientId}</p>
      {/* Add rendering of medication info here */}
    </div>
  );
};
