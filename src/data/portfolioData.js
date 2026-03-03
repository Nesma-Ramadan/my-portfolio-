import P1 from "/public/cover-handmade app.png"


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
    'Figma',
    'Wireframing',
    'Prototyping',
  ],
};

export const uiuxProjects = [
  {
    id: 1,
    title: 'E-Commerce App Redesign',
    problem: 'Confusing checkout flow led to high cart abandonment.',
    solution: 'Redesigned the flow with clearer steps, progress indicators, and simplified form fields.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/',
    imagePlaceholder: 'E-commerce',
    image:P1,
  },
  {
    id: 2,
    title: 'Fitness Tracking Dashboard',
    problem: 'Users overwhelmed by too much data at once.',
    solution: 'Created a dashboard with progressive disclosure and clear visual hierarchy.',
    tools: ['Figma', 'Wireframing', 'User Research'],
    behanceUrl: 'https://www.behance.net/',
    imagePlaceholder: 'Fitness',
  },
  {
    id: 3,
    title: 'Restaurant Booking App',
    problem: 'Booking process felt fragmented across multiple screens.',
    solution: 'Streamlined into a single flow with smart defaults and time-slot visualization.',
    tools: ['Figma', 'Prototyping'],
    behanceUrl: 'https://www.behance.net/',
    imagePlaceholder: 'Restaurant',
  },
];

export const frontEndProjects = [
  {
    id: 1,
    name: 'Static Portfolio Site',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    built: 'Simple multi-page portfolio with smooth scrolling and basic interactivity.',
    learned: 'Semantic HTML structure, CSS layout, and DOM manipulation.',
    githubUrl: 'https://github.com/',
    liveUrl: null,
    order: 1,
  },
  {
    id: 2,
    name: 'Todo List App',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    built: 'Interactive todo list with add, complete, and delete functionality.',
    learned: 'Event handling, local storage, and state management basics.',
    githubUrl: 'https://github.com/',
    liveUrl: null,
    order: 2,
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    built: 'Weather app that fetches data from an API and displays results.',
    learned: 'Fetch API, async/await, and handling API responses.',
    githubUrl: 'https://github.com/',
    liveUrl: null,
    order: 3,
  },
  {
    id: 4,
    name: 'React Portfolio',
    technologies: ['React', 'CSS'],
    built: 'This portfolio — built with React, reusable components, and responsive design.',
    learned: 'Component architecture, props, state, and modern React patterns.',
    githubUrl: 'https://github.com/',
    liveUrl: null,
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
  email: 'hello@nesma.dev',
  message: "I'd love to connect! Whether you're a recruiter, a fellow developer, or someone curious about my journey — feel free to reach out.",
  links: [
    { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/', icon: 'linkedin' },
    { name: 'Behance', url: 'https://www.behance.net/', icon: 'behance' },
  ],
};
