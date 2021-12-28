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
                Tengo habilidades organizativas, comprensivas, lógicas, de
                pensamiento creativo y receptivo a nuevas ideas. Deseo crecer en
                mi carrera como programador, aspirando a tener grandes proyectos
                además de aprender nuevas tecnologías y métodos mientras
                disfruto de la experiencia.
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
                Actualmente me encuentro cursando cuarto semestre de ingeniería
                en sistemas, adicional a esto cuento con 2 certificados de
                Desarrollo web, dictado por Google, los cuales tiene una
                intensidad de 40 horas para culminar; además hago parte del
                programa MisionTic
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="img/img2.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <br></br>

              <h5 className="card-title">Experiencia laboral</h5>
              <br></br>

              <p className="card-text">
                Si bien en el momento no poseo alguna experiencia laboral, tengo
                una gran capacidad de aprendizaje, destreza mental y habilidad
                en la toma de decisiones, lo cual me convierte en un buen
                candidato para cualquier labor que involucre responsabilidad,
                pensamiento analítico, lógico, crítico y creativo.
              </p>
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
                    target="_blank"
                  >
                    Introducción al desarrollo web I by Google
                  </a>
                  <a
                    href="certificados/certificado2.pdf"
                    class="list-group-item list-group-item-action list-group-item-success"
                    target="_blank"
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
                  <a
                    href="https://wa.me/573123597803"
                    class="list-group-item list-group-item-action list-group-item-success"
                    target="_blank"
                  >
                    Telefono: +57 312 359 7803
                  </a>
                  <a
                    href="mailto:giraldo.sebastian@correounivalle.edu.co"
                    class="list-group-item list-group-item-action list-group-item-success"
                    target="_blank"
                  >
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
