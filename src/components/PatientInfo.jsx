import { patientPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const PatientInfo = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: patientPath,
  });
  console.log(info);
  console.log(error);
  return (
    <div>
      <p>Patient Info {patientId}</p>
    </div>
  );
};
