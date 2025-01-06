// src/components/MedicationStatement.jsx
import { medicationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const MedicationStatement = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: medicationPath,
  });
  /* TODO: consultar contrato de medicamentos */
  return (
    <>
      {loading && <LoadingComponent />}
      {error && (
        <AlertComponent
          text="Hubo un error al cargar las medicaciones"
          type="danger"
        />
      )}
      {!error && total < 1 && (
        <AlertComponent text="No se encontraron medicaciones" type="warning" />
      )}
      {!error && entry?.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 justify-content-start px-5 py-4">
          {entry.map((item, index) => (
            <div className="col border p-3" key={index}>
              <p className="my-0">
                Condición: {item.resource?.code?.coding[0]?.display}
              </p>
              <p className="my-0">Fecha: {item.resource?.onsetDateTime}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
