import P1 from "/public/cover-handmade app.png"
import P2 from "/public/seafood web.png"
import p3 from "/public/digital app.png"
import p4 from "/public/web1.png"
import p5 from "/public/healthCare.png"
import p6 from "/public/web2.png"
import p7 from "/public/property.png"
import f1 from "/public/move app.png"
import f2 from "/public/Alex.png"
import f3 from "/public/click.png"
import f4 from "/public/Byza.png"


/**
 * Portfolio content data - customize for your profile
 * Edit these values to personalize your portfolio
 */

export const siteConfig = {
  name: 'Nesma',
  title: 'Junior Front-End Developer & UI/UX Designer',
  tagline: 'From pixels to code — learning, building, and growing every day.',
};

export const heroContent = {
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Contact Me',
};

export const aboutContent = {
  paragraphs: [
    "My journey began with UI/UX design. I loved creating wireframes, thinking through user flows, and making interfaces feel intuitive. But I kept wondering: what happens after the design? How do these ideas become real?",
    "That curiosity led me to front-end development. I started with HTML and CSS, then JavaScript, and eventually React. Each step felt like unlocking a new door — I could finally bring my designs to life.",
    "I'm not claiming to be an expert. I'm learning every day, practicing consistently, and building projects that challenge me. I'm comfortable with feedback, eager to improve, and ready to contribute as a junior developer.",
  ],
};

export const skills = {
  frontEnd: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
  ],
  uiUx: [
    'Adopbe XD',
    'Figma',
    'Wireframing',
    'Prototyping',
  ],
};

export const uiuxProjects = [
  {
    id: 1,
    type: "Mobile App",
    title: 'E-Commerce Handmade app',
    problem: ' Users find online shopping apps confusing and hard to navigate, making it difficult to browse products and complete purchases smoothly. (Common UX e-commerce challenge)',
    solution: 'Redesign the mobile UI/UX to create a clearer, more user-friendly shopping experience with easier browsing, intuitive navigation, and simplified checkout.',
    tools: ['UX Design', 'Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/210790425/Handvana_E-commerce-App_UiUx-Case-Study',
    imagePlaceholder: 'Handmade App',
    image: P1,
  },
  {
    id: 2,
    type: "Website App",
    title: 'Landing Page For A seafood Restaurant',
    problem: 'Visitors to restaurant websites often struggle to find key information quickly (like menu, booking, and contact), and generic designs don’t highlight seafood offerings well. This can reduce engagement and conversions.',
    solution: 'Create a clean, visually appealing landing page with clear sections (menu, food highlights, reservation CTA), strong imagery, and intuitive navigation that helps users quickly see offerings and take action.',
    tools: ['Adobe XD', 'Wireframing', 'User Research', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/215726271/Landing-Page-For-A-SeaFood-Restaurant',
    imagePlaceholder: 'Seafood Restaurant',
    image: P2,
  },
  {
    id: 3,
    type: "Mobile App",
    title: 'Digital Wallet App',
    problem: 'Users find it difficult to manage and pay money securely and easily on their mobile devices because existing digital wallet interfaces can be confusing or lack clarity in key actions like paying, tracking balance, or transferring funds. (General digital wallet UX challenge)',
    solution: 'Design a clean, intuitive digital wallet UI/UX that simplifies key actions — making payments, balance overview, and money transfers effortless and clear for users, with easy navigation and secure interaction flows.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/216650843/Digital-Wallet-App',
    imagePlaceholder: 'Digital Wallet',
    image: p3,
  },
  {
    id: 4,
    type: "Website App",
    title: 'Restaurant Website',
    problem: 'Users visiting restaurant websites often struggle to find essential information (menu, reservation options, contact, location) quickly, and many designs fail to visually reflect the restaurant’s brand and atmosphere.',
    solution: 'Create a modern, user-friendly restaurant website with clear navigation, strong visual appeal, easy access to the menu and reservation options, and a design that showcases the restaurant’s style and cuisine.',
    tools: ['Adobe XD', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/209920245/website-resturant',
    imagePlaceholder: 'Restaurant Website',
    image: p4,
  },
  {
    id: 5,
    type: "Mobile App",
    title: 'Healthcare App',
    problem: 'Healthcare apps are often confusing, hard to navigate, and overwhelming for users who need clear, simple ways to manage health tasks and access services.',
    solution: 'Design a clean, user-friendly mobile healthcare app UI/UX that makes key functions easy to find, simplifies navigation, and improves the overall experience for users.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/215666005/Healthcare-App',
    imagePlaceholder: 'Healthcare App',
    image: p5,
  },
  {
    id: 6,
    type: "Website App",
    title: 'Generic Website',
    problem: 'Users visiting generic websites often get overwhelmed by cluttered layouts and unclear navigation, making it hard to find key information quickly.',
    solution: 'Design a clean, organized website in Figma with intuitive navigation and visually clear sections so visitors can easily understand content and achieve their goals.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/219896771/Website-design-created-on-figma',
    imagePlaceholder: 'Generic Website',
    image: p6,
  },
  {
    id: 7,
    type: "Mobile App",
    title: 'Property App',
    problem: 'Users looking for properties often struggle with complex search tools and confusing listings, making it hard to find suitable homes efficiently.',
    solution: 'Design a clean, user-friendly property app UI/UX with simple filtering, easy-to-browse listings, and intuitive navigation so users can quickly find and explore properties.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/gallery/215676569/Property-App',
    imagePlaceholder: 'Property App',
    image: p7,
  },
];

export const frontEndProjects = [
  {
    id: 1,
    name: 'Movies App – Static Portfolio Website',
    technologies: ['HTML', 'CSS', 'JavaScript','API'],
    built: 'Developed a responsive multi-page portfolio site showcasing a dynamic Movies App with smooth navigation, interactive UI elements, and seamless user experience.',
    learned: 'Improved skills in semantic HTML structuring, advanced CSS layout techniques, and DOM manipulation in JavaScript to build interactive web features.',
    githubUrl: 'https://github.com/Nesma-Ramadan/Movies-App.git',
    liveUrl: 'https://movies-app-pi-orcin.vercel.app/',
    imagePlaceholder: 'Movies App',
    image: f1,
    order: 1,
  },
  {
    id: 2,
    name: 'Personal Portfolio Website',
    technologies: ['HTML', 'tailwindcss', 'React.js'],
    built: 'Created a responsive, clean multi-section portfolio website to showcase personal projects, skills, and professional information with smooth scrolling and engaging UI.',
    learned: 'Enhanced understanding of semantic HTML, responsive CSS layouts, and JavaScript for DOM interactions and navigation enhancements.',
    githubUrl: 'https://github.com/Nesma-Ramadan/Alex-Portfolio.git',
    liveUrl: 'https://alex-portfolio-dusky.vercel.app/',
    imagePlaceholder: 'Personal Portfolio Website',
    image: f2,
    order: 2,
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    technologies: ['TypeScript', 'Tailwind css', 'Next.js', 'API'],
    built: 'Developed a fully responsive e‑commerce website featuring product listings, interactive UI elements, and user‑friendly navigation to simulate an online shopping experience.',
    learned: 'Strengthened skills in structuring semantic HTML, creating modern CSS layouts and responsive design, and implementing DOM manipulation with JavaScript for dynamic content and interaction.',
    githubUrl: 'https://github.com/Nesma-Ramadan/e-commers.git',
    liveUrl: 'https://e-commers-snowy.vercel.app/',
    imagePlaceholder: 'Weather Dashboard',
    image: f3,
    order: 3,
  },
  {
    id: 4,
    name: 'Byza Responsive Website',
    technologies: ['React.js', 'CSS' ,'TypeScript' ,'API'],
    built: 'Developed a modern, responsive website with intuitive navigation, engaging layout, and smooth interactions to represent the Byza brand effectively across different screen sizes.',
    learned: 'Improved skills in writing semantic HTML structure, designing responsive CSS layouts, and implementing JavaScript for interactive UI behavior and enhanced user experience.',
    imagePlaceholder: 'Byza Responsive Website',
    image: f4,
    githubUrl: 'https://github.com/Nesma-Ramadan/Byza_website.git',
    liveUrl: 'https://byza-website.vercel.app/',
    order: 4,
  },
].sort((a, b) => a.order - b.order);

export const timelineItems = [
  {
    id: 1,
    title: 'UI/UX Design Foundation',
    period: '2023',
    description: 'Started learning design principles, Figma, and user-centered thinking.',
  },
  {
    id: 2,
    title: 'HTML & CSS',
    period: '2023',
    description: 'Built first static websites. Learned semantic markup and responsive layouts.',
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    period: '2024',
    description: 'Added interactivity. DOM manipulation, events, and basic algorithms.',
  },
  {
    id: 4,
    title: 'React & Modern Tooling',
    period: '2024',
    description: 'Component-based development. Vite, React hooks, and project structure.',
  },
  {
    id: 5,
    title: 'Ongoing Practice',
    period: 'Present',
    description: 'Building projects, contributing to open source, and preparing for junior roles.',
  },
];

export const contactContent = {
  email: 'nesma.creativehub.freelance@gmail.com',
  message: "I'd love to connect! Whether you're a recruiter, a fellow developer, or someone curious about my journey — feel free to reach out.",
  links: [
    { name: 'GitHub', url: 'https://github.com/Nesma-Ramadan?tab=repositories', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nesma-ramadan', icon: 'linkedin' },
    { name: 'Behance', url: 'https://www.behance.net/Horizons-Design', icon: 'behance' },
  ],
};
