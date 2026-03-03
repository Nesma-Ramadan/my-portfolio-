import { skills } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Skills.css';

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div ref={ref} className={`skills__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="skills-heading" className="skills__heading">
          Skills
        </h2>
        <p className="skills__intro">
          Technologies and tools I work with. No fake percentages — just honest representation.
        </p>
        <div className="skills__grid">
          <div className="skills__group">
            <h3 className="skills__group-title">Front-End</h3>
            <ul className="skills__list">
              {skills.frontEnd.map((skill) => (
                <li key={skill} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__group">
            <h3 className="skills__group-title">UI/UX</h3>
            <ul className="skills__list">
              {skills.uiUx.map((skill) => (
                <li key={skill} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
