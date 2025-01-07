import { medicationPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { CardComponent } from "./common/CardComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const MedicationStatement = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: medicationPath,
  });
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
            <CardComponent item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};
