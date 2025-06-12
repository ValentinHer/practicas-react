import React, { useState } from "react";

const Ejercicio03 = () => {
  const [count, setCount] = useState(0);

  const handleSum = () => setCount((prev) => prev + 1);

  const handleRes = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  const handleRestart = () => setCount(0);

  return (
    <>
      <div className="row mt-4 mb-4">
        <div className="col-12">
          <div className="h4 mt-4">Ejercicio 3 - Funciones - Contador</div>
        </div>
        <hr />
        <div className="col-12 text-center">
          <div className="mx-auto col-2 bg-primary">
            <p style={{ fontSize: "100px" }} className="text-light text-center">
              {count}
            </p>
          </div>
          <button className="w-25 btn btn-success" onClick={handleSum}>
            Incrementar Contador
          </button>
          <button className="w-25 btn btn-danger ms-2" onClick={handleRes}>
            Restar Contador
          </button>
          <button className="w-25 btn btn-secondary ms-2" onClick={handleRestart}>
            Reiniciar Contador
          </button>
        </div>
      </div>
    </>
  );
};

export default Ejercicio03;
