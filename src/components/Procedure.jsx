import { procedurePath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const Procedure = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: procedurePath,
  });
  return (
    <>
      {loading && <LoadingComponent />}
      {error && (
        <AlertComponent
          text="Hubo un error al cargar los procedimientos"
          type="danger"
        />
      )}
      {!error && total < 1 && (
        <AlertComponent
          text="No se encontraron procedimientos"
          type="warning"
        />
      )}
      {!error && entry?.length > 0 && (
        <div className="d-flex flex-column px-5 py-4">
          {entry?.map((item, index) => (
            <p key={index}>
              {index + 1}: {item.resource?.code?.coding[0]?.display}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
