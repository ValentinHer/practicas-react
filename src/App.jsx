import { Buton } from "./components/utils/Buton";
import { Ejercicio01 } from "./components/ejercicio01";
import { NavBar } from "./components/NavBar";
import Ejercicio02 from "./components/Ejercicio02";
import Ejercicio03 from "./components/Ejercicio03";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="h1 text-center mt-2 bg-danger">
              Welcome to My React App
            </h1>
          </div>
        </div>
        {/**Mando a llamra componente externo */}
        <Ejercicio01 />
        <Buton />
        <NavBar />
        <Ejercicio02 />
        <Ejercicio03 />
      </div>
    </>
  );
}

export default App;
