import { patientPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const PatientInfo = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: patientPath,
  });
  return (
    <>
      {loading && <LoadingComponent />}
      {error && !loading && (
        <AlertComponent
          text="Hubo un error al cargar las condiciones"
          type="danger"
        />
      )}
      {!error && total < 1 && !loading && (
        <AlertComponent text="No se encontraron condiciones" type="warning" />
      )}
      {!error && entry?.length > 0 && !loading && (
        <>
          <div className="col-11 mx-auto py-4 d-flex flex-column justify-content-center align-items-center">
            <h3>
              {entry[0]?.resource?.name?.text ||
                `${entry[0]?.resource?.name[0]?.given.join(" ")} ${
                  entry[0]?.resource?.name[0]?.family
                }`}
            </h3>
          </div>
        </>
      )}
    </>
  );
};
