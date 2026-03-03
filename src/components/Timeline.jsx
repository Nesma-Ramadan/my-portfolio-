import { timelineItems } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Timeline.css';

export default function Timeline() {
  const [ref, isInView] = useInView();

  return (
    <section className="timeline" id="timeline" aria-labelledby="timeline-heading">
      <div ref={ref} className={`timeline__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="timeline-heading" className="timeline__heading">
          Learning & Experience
        </h2>
        <p className="timeline__intro">
          A progression of courses, self-learning, and practice — consistency over speed.
        </p>
        <div className="timeline__track">
          {timelineItems.map((item, index) => (
            <article
              key={item.id}
              className="timeline__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
