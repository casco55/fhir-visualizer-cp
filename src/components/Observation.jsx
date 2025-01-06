// src/components/Observation.jsx
import { observationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { CardComponent } from "./common/CardComponent";

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
            <CardComponent item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};
