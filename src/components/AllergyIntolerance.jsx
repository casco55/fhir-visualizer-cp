// src/components/AllergyIntolerance.jsx
import { allergyPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const AllergyIntolerance = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: allergyPath,
  });
  const entry = info?.entry;
  const total = info?.total;

  return (
    <div>
      <p>Allergies and Intolerances for {patientId}</p>
    </div>
  );
};
