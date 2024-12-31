// src/components/AllergyIntolerance.jsx
import { allergyPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const AllergyIntolerance = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: allergyPath,
  });

  return (
    <div>
      <p>Allergies and Intolerances for {patientId}</p>
      {/* Add rendering of allergy and intolerance info here */}
    </div>
  );
};
