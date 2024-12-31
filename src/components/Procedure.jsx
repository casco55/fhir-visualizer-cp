import { procedurePath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const Procedure = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: procedurePath,
  });

  return (
    <div>
      <p>Procedures for {patientId}</p>
      {/* Add rendering of procedure info here */}
    </div>
  );
};
