import { useState } from 'react';
import { siteConfig } from '../data/portfolioData';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <nav className="header__nav" aria-label="Main navigation">
        <button
          className="header__logo"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          {siteConfig.name}
        </button>
        <button
          className="header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
        </button>
        <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
          <li>
            <a href="#about" onClick={handleNavClick}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>Projects</a>
          </li>
          <li>
            <a href="#timeline" onClick={handleNavClick}>Timeline</a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
