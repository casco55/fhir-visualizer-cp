import { conditionPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const Condition = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: conditionPath,
  });

  return (
    <div>
      <p>Condition {patientId}</p>
    </div>
  );
};
