// src/components/AllergyIntolerance.jsx
import { allergyPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const AllergyIntolerance = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: allergyPath,
  });
  /* TODO: consultar contrato de alergias  */
  return (
    <>
      {loading && <LoadingComponent />}
      {error && (
        <AlertComponent
          text="Hubo un error al cargar las intolerancias"
          type="danger"
        />
      )}
      {!error && total < 1 && (
        <AlertComponent text="No se encontraron intolerancias" type="warning" />
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
