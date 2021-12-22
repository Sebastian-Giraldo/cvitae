import { React } from "react";
import "./Curriculum.css";

function Tarjetas() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4 text-black mt-4">
        <div className="col">
          <div className="card">
            <img src="img/img4.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Sobre mí</h5>
              <p className="card-text">
              Soy un joven de 20 años receptivo a nuevas ideas. Deseo crecer en mi carrera
              como programador, aspirando a tener grandes proyectos,además de aprender 
              nuevas tecnologias mientras disfruto de la experiencia.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img1.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <br></br>
              <h5 className="card-title">Estudios</h5>
              
              <p className="card-text">
                Actualmente me encuentro cursando el cuarto semestre académico en
                Ingeniería en sistemas, en la Universidad del Valle.
                Realizando de estudios autónomamente en desarrollo web Full Stack
                <br></br>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img2.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <br></br>
              <br></br>
              <h5 className="card-title">Experiencia laboral</h5>
              <br></br>
              
              <p className="card-text">
                Si bien actualmente no poseo ninguna experiencia laboral, poseo una
                capacidad de aprendizaje y toma de decisiones, lo cual me convierten en
                un candidato ideal para el programa.</p>
                <br></br>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img3.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Habilidades Técnicas y lenguajes</h5>
              <p className="card-text">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Lenguajes de programación: </div>
                      Python, Java, Javascript
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Desarrollo web Frontend: </div>
                      HTML, CSS, Bootstrap, React
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Desarrollo web Backend</div>
                      MongoDB, MySQL, PostgreSQL
                    </div>
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img5.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Cursos y Certificados</h5>
              <p className="card-text">
                <div class="list-group">
                  <a
                    href="certificados/certificado1.pdf"
                    class="list-group-item list-group-item-action list-group-item-success"
                  >
                    Introducción al desarrollo web I by Google
                  </a>
                  <a
                    href="certificados/certificado2.pdf"
                    class="list-group-item list-group-item-action list-group-item-success"
                  >
                    Introducción al desarrollo web II by Google
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img6.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Contacto</h5>
              <p className="card-text">
                <div class="list-group">
                  <a href="https://wa.me/573228973228"
                  class="list-group-item list-group-item-action list-group-item-success">
                    Telefono: +57 312 359 7803
                  </a>
                  <a href="mailto:giraldo.sebastian@correounivalle.edu.co"
                   class="list-group-item list-group-item-action list-group-item-success">
                    Email: giraldo.sebastian@correounivalle.edu.co
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tarjetas;
