export const Buton = (props) => {
  return (
    <div className="col-6 text-center mt-4">
      <button className={`btn btn-primary w-50 ${props.color}`} >
        <i className="bi bi-person-add"></i>
        <span className="ms-2">{props.texto}</span>
      </button>
    </div>
  );
};
