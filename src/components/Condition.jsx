import { useEffect } from "react";
import { conditionPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { ErrorComponent } from "./common/ErrorComponent";

export const Condition = ({ patientId }) => {
  const { info, error } = useInfo({
    patientId,
    path: conditionPath,
  });
  const entry = info?.entry;

  return (
    <>
      {error && (
        <ErrorComponent text="Hubo un error al cargar las condiciones" />
      )}
      {!error && (
        <div className="row row-cols-1 row-cols-md-3 justify-content-start px-5 py-4">
          {entry &&
            entry.length > 0 &&
            entry?.map((item, index) => (
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
