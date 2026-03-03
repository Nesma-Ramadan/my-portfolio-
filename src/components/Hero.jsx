import { siteConfig, heroContent } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero" role="banner">
      <div className="hero__content">
        <h1 className="hero__name">{siteConfig.name}</h1>
        <p className="hero__title">{siteConfig.title}</p>
        <p className="hero__tagline">{siteConfig.tagline}</p>
        <div className="hero__cta">
          <button
            className="hero__btn hero__btn--primary"
            onClick={scrollToProjects}
          >
            {heroContent.ctaPrimary}
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={scrollToContact}
          >
            {heroContent.ctaSecondary}
          </button>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </header>
  );
}
