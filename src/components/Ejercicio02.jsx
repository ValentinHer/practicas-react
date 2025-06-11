const Ejercicio02 = () => {
  //Lógica de componente
  // 1.- variable / constante
  // 2.- hooks
  // 3.- funciones
  const articulosDisponibles = 10;

  const addToCart = () => {
    alert("agregado al carrito");
  };

  const deleteProduct = () => {
    alert("Producto eliminado");
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <div className="h4 mt-4">Ejercicio 2 - Botón y funciones</div>
        </div>
        <hr />
        <h1>Artículos Disponibles: {articulosDisponibles}</h1>
        <div className="col-12 d-flex justify-align-content-center">
          <button className="w-25 btn btn-primary" onClick={addToCart}>
            <i className="bi bi-cart-plus-fill" />
            <span className="ms-2">Agregar Artículo</span>
          </button>
          <button className="w-25 btn btn-danger ms-2" onClick={deleteProduct}>
            <i class="bi bi-trash3-fill"></i>
            <span className="ms-2">Eliminar producto</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ejercicio02;
