import { uiuxProjects } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './UIUXProjects.css';

export default function UIUXProjects() {
  const [ref, isInView] = useInView();

  return (
    <section className="uiux-projects" aria-labelledby="uiux-heading">
      <div ref={ref} className={`uiux-projects__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="uiux-heading" className="uiux-projects__heading">
          UI/UX Projects
        </h2>
        <p className="uiux-projects__intro">
          Design work from my Behance — problem-focused case studies.
        </p>
        <div className="uiux-projects__grid">
          {uiuxProjects.map((project) => (
            <article
              key={project.id}
              className="uiux-project-card"
            >
              <div className="uiux-project-card__visual">
                {project.image ? <img src={project.image} alt={project.title} />:
                <span className="uiux-project-card__placeholder">
                  {project.imagePlaceholder}
                </span>}
              </div>
              <div className="uiux-project-card__content">
                <h3 className="uiux-project-card__title">{project.title}</h3>
                <div className="uiux-project-card__description">
                  <p>
                    <strong>Problem:</strong> {project.problem}
                  </p>
                  <p>
                    <strong>Solution:</strong> {project.solution}
                  </p>
                </div>
                <div className="uiux-project-card__tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="uiux-project-card__tool">
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uiux-project-card__link"
                >
                  View on Behance →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
