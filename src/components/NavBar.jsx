import { Buton } from "./utils/Buton";

export const NavBar = () => {
  return (
    <div className="row bg-danger mt-3">
      <div className="d-md-flex flex-direction-row p-3 d-block">
        <Buton color="btn-primary" texto="Crear Cuenta" />
        <Buton color="btn-success" texto="Iniciar Sesión" />
      </div>
    </div>
  );
};
