import { aboutContent } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './About.css';

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div ref={ref} className={`about__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="about-heading" className="about__heading">
          My Journey
        </h2>
        <div className="about__content">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
