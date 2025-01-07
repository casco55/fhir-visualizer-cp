import { useEffect } from "react";
import { useInfo } from "../../hooks/useInfo";
import { AlertComponent } from "./AlertComponent";
import { CardComponent } from "./CardComponent";
import { LoadingComponent } from "./LoadingComponent";

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
      {loading && <LoadingComponent />}
      {error && !loading && <AlertComponent text={errorText} type="danger" />}
      {!error && total < 1 && !loading && (
        <AlertComponent text={noRecordsText} type="warning" />
      )}
      {!error && entry?.length > 0 && !loading && (
        <div className="row row-cols-1 row-cols-md-3 justify-content-start px-5 py-4">
          {entry
            .sort((a, b) => {
              const dateA = new Date(
                a.resource?.effectiveDateTime || a.resource?.onsetDateTime
              );
              const dateB = new Date(
                b.resource?.effectiveDateTime || b.resource?.onsetDateTime
              );
              return dateB - dateA;
            })
            .map((item, index) => (
              <CardComponent item={item} key={index} />
            ))}
        </div>
      )}
    </>
  );
};
