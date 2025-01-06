import { useInfo } from "../../hooks/useInfo";
import { AlertComponent } from "./AlertComponent";
import { CardComponent } from "./CardComponent";

export const InfoComponent = ({
  patientId,
  path,
  errorText,
  noRecordsText,
}) => {
  const { info, error, total, entry, loading } = useInfo({
    patientId,
    path: path,
  });

  return (
    <>
      {error && <AlertComponent text={errorText} type="danger" />}
      {!error && total < 1 && (
        <AlertComponent text={noRecordsText} type="warning" />
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
