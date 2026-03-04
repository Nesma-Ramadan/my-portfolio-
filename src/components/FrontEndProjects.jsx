import { frontEndProjects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './FrontEndProjects.css';

export default function FrontEndProjects() {
  const [ref, isInView] = useInView();

  return (
    <section className="frontend-projects" id="projects" aria-labelledby="frontend-heading">
      <div ref={ref} className={`frontend-projects__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="frontend-heading" className="frontend-projects__heading">
          Front-End Projects
        </h2>
        <p className="frontend-projects__intro">
          Built chronologically — from simple layouts to interactive apps. Progress over perfection.
        </p>
        <div className="frontend-projects__list">
          {frontEndProjects.map((project, index) => (
            <article
              key={project.id}
              className="frontend-project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.image && (
                <div className="frontend-project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="frontend-project-card__image"
                  />
                  {/* <div className="frontend-project-card__overlay">
                    <div className="frontend-project-card__number">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div> */}
                </div>
              )}
              <div className="frontend-project-card__content">
                <h3 className="frontend-project-card__title">{project.name}</h3>
                <div className="frontend-project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="frontend-project-card__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="frontend-project-card__built">
                  <strong>Built:</strong> {project.built}
                </p>
                <p className="frontend-project-card__learned">
                  <strong>Learned:</strong> {project.learned}
                </p>
                <div className="frontend-project-card__links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frontend-project-card__link"
                  >
                    <i className="fa-brands fa-github "></i>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="frontend-project-card__link"
                    >
                      <i className="fa-solid fa-link text-red "></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
