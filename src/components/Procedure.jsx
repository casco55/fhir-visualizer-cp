import { procedurePath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { ErrorComponent } from "./common/ErrorComponent";

export const Procedure = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: procedurePath,
  });
  const entry = info?.entry;
  return (
    <>
      {error && (
        <ErrorComponent text="Hubo un error al cargar los procedimientos" />
      )}
      {!error && (
        <div className="d-flex flex-column px-5 py-4">
          {entry &&
            entry.length > 0 &&
            entry?.map((item, index) => (
              <p key={index}>
                {index + 1}: {item.resource?.code?.coding[0]?.display}
              </p>
            ))}
          {/* Add rendering of procedure info here */}
        </div>
      )}
    </>
  );
};
