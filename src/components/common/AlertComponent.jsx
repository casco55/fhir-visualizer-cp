export const AlertComponent = ({ text = "", type = "warning" }) => {
  return (
    <div className="col-12 d-flex ">
      <div className={`mx-auto my-5 alert alert-${type} col-11`}>
        <h4 className="alert-heading">Error</h4>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
};
