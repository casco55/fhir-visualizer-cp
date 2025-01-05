// src/components/Observation.jsx
import { observationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";

export const Observation = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: observationPath,
  });

  return (
    <>
      {error && (
        <AlertComponent
          text="Hubo un error al cargar las observaciones"
          type="danger"
        />
      )}
      {!error && total < 1 && (
        <AlertComponent text="No se encontraron observaciones" type="warning" />
      )}
      {!error && entry?.length > 0 && (
        <div className="row row-cols-1 row-cols-md-3 justify-content-start px-5 py-4">
          {entry.map((item, index) => (
            <div className="col border p-3" key={index}>
              <p className="my-0">
                Observación: {item.resource?.code?.coding[0]?.display}
              </p>
              <p className="my-0">Fecha: {item.resource?.effectiveDateTime}</p>
              {item.resource?.valueQuantity?.value && (
                <p className="my-0">
                  Valor: {item.resource?.valueQuantity?.value}
                </p>
              )}
              {item.resource?.component &&
                item.resource?.component.map((item, index) => (
                  <div key={index}>
                    <p className="my-0">
                      Componente: {item.code?.coding[0]?.display}
                    </p>
                    <p className="my-0">Valor: {item.valueQuantity?.value}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
