import { allergyPath } from "../constants/endpoints";
import { useInfo } from "../hooks/useInfo";
import { AlertComponent } from "./common/AlertComponent";
import { CardComponent } from "./common/CardComponent";
import { LoadingComponent } from "./common/LoadingComponent";

export const AllergyIntolerance = ({ patientId }) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: allergyPath,
  });
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
            <CardComponent item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};
