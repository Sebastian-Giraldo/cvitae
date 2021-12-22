import React from "react";
import "./Curriculum.css";
import Tarjetas from "./Tarjetas";

function Curriculum() {
    return (
      <div className="principal position-absolute top-50 start-50 translate-middle text-white">
        <div className="caja1 rounded-3">
          <h1>Sebastian Dario Giraldo Rodas</h1>
          <p>
            Estudiante de Ingeniería en sistemas<br></br>
            Universidad del Valle
          </p>
        </div>
        <div className="cajacuerpo"></div>
        <Tarjetas/>
      </div>
    );
  }
  
export default Curriculum;

