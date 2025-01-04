export const ErrorComponent = ({ text = "" }) => {
  return (
    <div className="col-12 d-flex ">
      <div className="mx-auto my-5 alert alert-danger col-11">
        <h4 className="alert-heading">Error</h4>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
};
