export const SearchInput = ({ text, handleChange, onSearch }) => {
  return (
    <div className="input-group mb-3 col-11 mx-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar paciente"
        value={text}
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onSearch}
      >
        Buscar
      </button>
    </div>
  );
};
