import React, { useState } from "react";

const Ejercicio03 = () => {
  const [count, setCount] = useState(0);

  const handleSum = () => setCount(prev => prev + 1);

  return (
    <>
      <div className="row mt-4 mb-4">
        <div className="col-12">
          <div className="h4 mt-4">Ejercicio 2 - Funciones - Contador</div>
        </div>
        <hr />
        <div className="col-12 text-center">
          <div className="mx-auto col-2 bg-primary">
            <p style={{ fontSize: "100px" }} className="text-light text-center">
              {count}
            </p>
          </div>
          <button className="w-25 btn btn-dark" onClick={handleSum} >Incrementar Contador</button>
        </div>
      </div>
    </>
  );
};

export default Ejercicio03;
