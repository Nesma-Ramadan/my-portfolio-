import { contactContent } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import './Contact.css';

const iconPaths = {
  github: <i className="fa-brands fa-github"></i>,
  linkedin: <i className="fa-brands fa-linkedin"></i>,
  behance: <i className="fa-brands fa-behance"></i>,
};

export default function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div ref={ref} className={`contact__container section-reveal ${isInView ? 'section-reveal--visible' : ''}`}>
        <h2 id="contact-heading" className="contact__heading">
          Let's Connect
        </h2>
        <p className="contact__message">{contactContent.message}</p>
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${contactContent.email}`}
          target='_blank'
          rel='noopener noreferrer'
          className="contact__email"
        >
          {contactContent.email}
        </a>
        <div className="contact__links">
          {contactContent.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
              aria-label={link.name}
            >
             
                {iconPaths[link.icon] }
            
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
