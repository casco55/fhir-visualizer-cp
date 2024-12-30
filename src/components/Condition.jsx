import { conditionPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const Condition = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: conditionPath,
  });
  console.log(info);
  console.log(error);
  return (
    <div>
      <p>Condition {patientId}</p>
    </div>
  );
};
