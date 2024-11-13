import { useState } from 'react';
import './App.css';
import htmlImage from './img/html.png'
function App() {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="profile-card">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="Lucas Vargas" />
          </div>
          <div className="profile-info">
            <h1>Lucas Vargas</h1>
            <p>Desarrollador Web | Aspirante a Programador</p>
            <p>Email: <a href="mailto:lucas.vargas@example.com">lucas.vargas@example.com</a></p>
            <p>Teléfono: +54 9 11 1234-5678</p>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>Sobre mí</h2>
          <p>
            Soy Lucas Vargas, graduado del Colegio Técnico N°36 con una fuerte vocación en el desarrollo de software. Mi objetivo profesional es crecer como programador y especializarme en tecnologías web y bases de datos. Me considero una persona dedicada y con habilidades para adaptarme rápidamente a nuevos entornos de trabajo y aprendizaje.
          </p>
        </section>

        <section id="experience" className="section">
          <h2 onClick={() => setShowExperience(!showExperience)} className="clickable">Experiencia</h2>
          {showExperience && (
            <div>
              <div className="experience-item">
                <h3>Desarrollador Web Junior - ABC Solutions</h3>
                <p><em>2023 - Actualidad</em></p>
                <p>
                  Desarrollo de front-end, optimización de sitios web y manejo de bases de datos MySQL para mejorar la experiencia de usuario. Colaboración en el diseño y mantenimiento de APIs REST.
                </p>
              </div>
              <div className="experience-item">
                <h3>Desarrollador Web - XYZ Technologies</h3>
                <p><em>2021 - 2023</em></p>
                <p>
                  Participación en el desarrollo y mantenimiento de aplicaciones web. Foco en la optimización de la carga de páginas y desarrollo de soluciones de bases de datos.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id="projects" className="section">
          <h2 onClick={() => setShowProjects(!showProjects)} className="clickable">Proyectos</h2>
          {showProjects && (
            <div>
              <div className="project-item">
                <h3>Sistema de Gestión Escolar</h3>
                <p>
                  Desarrollo de un sistema de gestión escolar para la administración de estudiantes, asignaturas y horarios, usando HTML, CSS y MySQL para un almacenamiento seguro.
                </p>
              </div>
              <div className="project-item">
                <h3>Plataforma de Reservas de Canchas</h3>
                <p>
                  Plataforma de reservas en tiempo real, con actualizaciones de disponibilidad y confirmación automática.
                </p>
              </div>
              <div className="project-item">
                <h3>App de Tareas y Recordatorios</h3>
                <p>
                  Aplicación para gestión de tareas y recordatorios, donde los usuarios pueden crear, editar y eliminar eventos importantes con alertas.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id="technologies" className="section">
          <h2 onClick={() => setShowTechnologies(!showTechnologies)} className="clickable">Tecnologías y Lenguajes</h2>
          {showTechnologies && (
            <div className="technologies-grid">
              <div className="technology-item">
                <img src={htmlImage} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="technology-item">
                <img src="https://via.placeholder.com/50?text=CSS" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="technology-item">
                <img src="https://via.placeholder.com/50?text=JS" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="technology-item">
                <img src="https://via.placeholder.com/50?text=React" alt="React" />
                <p>React</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Lucas Vargas</p>
      </footer>
    </div>
  );
}

export default App;

