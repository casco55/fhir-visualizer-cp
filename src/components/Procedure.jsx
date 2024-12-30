import { procedurePath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";

export const Procedure = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: procedurePath,
  });
  console.log(info);
  console.log(error);
  return (
    <div>
      <p>Procedures for {patientId}</p>
      {/* Add rendering of procedure info here */}
    </div>
  );
};
