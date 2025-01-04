import { useEffect } from "react";
import { conditionPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";

export const Condition = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: conditionPath,
  });

  return (
    <>
      {error && (
        <AlertComponent
          text="Hubo un error al cargar las condiciones"
          type="danger"
        />
      )}
      {!error && total < 1 && (
        <AlertComponent text="No se encontraron condiciones" type="warning" />
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
