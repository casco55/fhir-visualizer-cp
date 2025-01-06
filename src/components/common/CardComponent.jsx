export const CardComponent = ({ item }) => {
  return (
    <>
      <div className="col p-3">
        <div className="shadow p-3 h-100 rounded">
          <h4 className="mb-2 fw-bold border-bottom border-3 border-dark">
            {item.resource?.code?.coding[0]?.display}
          </h4>
          <div className="mb-2 border-bottom border-2 py-2">
            <p className="my-0">
              <strong>Fecha: </strong>
              {item.resource?.effectiveDateTime || item.resource?.onsetDateTime}
            </p>

            {item.resource?.valueQuantity?.value && (
              <p className="my-0">
                <strong>Valor: </strong>
                {item.resource?.valueQuantity?.value}
              </p>
            )}
          </div>
          {item.resource?.component && (
            <div className="col-11 ms-auto">
              <h5 className="mb-2 fw-bold">Componentes</h5>
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {item.resource?.component.map((item, index) => (
                    <tr key={index}>
                      <td>{item.code?.coding[0]?.display}</td>
                      <td>{item.valueQuantity?.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
