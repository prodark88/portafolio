import React from "react";
import { ButtonSecondary, ButtonPrimary } from "../buttoms/buttonPrimary";
import foto from "../../images/foto.webp";
import foto2 from "../../images/foto2.webp"
import perfil from "../../images/perfil.png"
import perfil3 from "../../images/perfil3.webp";
import project1 from "../../images/project1.png"
import project2 from "../../images/projecto2.png";
import project3 from "../../images/project3.png";
import { MySkills } from "../buttoms/progressBar";
import "../../styles/styles.css"



export const ContainHome = () => {
  return (
    <section className="mainContain">
      <div className="rowContainCenter">
        <div className="containerSecondary">
          <p>Hello Everyone</p>
          <h1>
            I'AM <br />
            KENNETH MOLINA
          </h1>
          <ButtonSecondary
            label="GitHub"
            url="https://github.com/prodark88"
          ></ButtonSecondary>
        </div>
        <div className="containerPrimary">
          <img className="image" src={perfil} alt="" />
        </div>
      </div>
    </section>
  );
};



const styles = {
  container1: {
    flex: "50%",
    border: "0px", // Solo para visualización, puedes quitarlo
    margin: "20px",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: "50%",
    height: "350px",
    border: "0px", // Solo para visualización, puedes quitarlo
    margin: "20px",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },
};


export function ThanksContain() {
  return (
    <div className="mainContain">
      <div className="rowContainCenter">
        <div className="container1">
          <img className="image3" src={foto} alt="" />
        </div>
        <div className="container1" style={styles.container2}>
          <p>2023 Portfolio Desing Graphic</p>
          <h1>THANK YOU </h1>
          <p style={{ color: "white" }}>
            "Gracias por explorar mi mundo a través de este portafolio. Si
            tienes preguntas, ideas o simplemente quieres conectar, estaré
            encantado de escucharte."
          </p>
          <div className="rowContain">
            <ButtonPrimary
              label="Contact "
              url="https://wa.me/51921882899"
            ></ButtonPrimary>
            <ButtonSecondary
              label="GitHub"
              url="https://github.com/prodark88"
            ></ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SkillsContain(){
    return (
      <div className="mainContain">
        <div className="rowContain">
          <div className="container1" style={styles.container1}>
            <h1>PERSONAL SKILLS </h1>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              rerum fugiat architecto alias accusamus facere placeat autem nihil
              sequi, quisquam tenetur nisi dolores iusto inventore ex rem qui
              quaerat aperiam.
            </p>
            <MySkills></MySkills>
          </div>
          <div className="container2" style={styles.container2}>
            <img className="image2" src={foto2} alt="" style={styles.image2} />
          </div>
        </div>
      </div>
    );
}

export function ProjectsContain(){
    return (
      <div className="mainContain">
        <div className="columnContain">
          <div className="container4">
            <h1> RECENTS PROJECTS</h1>
          </div>
          <div className="container3">
            <div>
              <img
                className="smallImage"
                src={project1}
                alt="Descripción de la imagen"
              />
              <h3>Ecommerce con Django</h3>
              <p>| Login| RegistroUsuarios| PagoPaypal | <br />Productos | Categorias | AdminDjango |</p>
            </div>
            <div>
              <img
                className="smallImage"
                src={project2}
                alt="Descripción de la imagen"
              />
              <h3>Diseño web CSS/HTML</h3>
              <p>| DiseñoWeb | Responsivo | Movil | Desktop |</p>
            </div>
            <div>
              <img
                className="smallImage"
                src={project3}
                alt="Descripción de la imagen"
              />
              <h3>Página web Django</h3>
              <p>| Bootstrap | MVT | PostgreSQL | ORM | Responsivo |</p>
            </div>
          </div>
        </div>
      </div>
    );
}


export function AboutContain(){
  return (
    <div className="mainContain">
      <div className="rowContainCenter">
        <div className="container1">
          <img className="image3" src={perfil3} alt="" />
        </div>
        <div className="container1" style={styles.container2}>
          <h2>About Me</h2>
          <p style={{ color: "white" }}>
            Desarrollador web back-end, A través del compromiso y dedicación, eh
            adquirido habilidades en desarrollo web y programación, enfocado en
            programación orientada al BackEnd. Eh desarrollados proyectos
            significativos, como una página web para un Estudio Jurídico con
            Django y un Ecommerce utilizando Python y Django, demostrando
            capacidades en registro y autenticación de usuarios, gestión de
            productos, y diseño responsivo. También cree una página web con
            Flask para un blog de comidas, incorporando características como
            CRUD y diseño responsivo. Además, poseo habilidades en diseño web
            con HTML5 y CSS3, demostrando mi capacidad para crear páginas
            atractivas y limpias. En cuanto a certificaciones, estoy cursando la
            Certified Tech Developer en Digital House, y eh completado
            certificaciones en Django Fullstack Developer, Desarrollador Web
            Back End Python, y una introducción al desarrollo BackEnd.
          </p>{" "}
          <br />
          <div className="rowContain">
            <ButtonPrimary
              label="Contact"
              url="https://wa.me/51921882899"
            ></ButtonPrimary>
            <ButtonSecondary
              label="Linkedin"
              url="https://www.linkedin.com/in/kenneth-molina-aldair/"
            ></ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
}

