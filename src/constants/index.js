import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  wpress,
  sql,
  uxui,
  flutter,
  ambsan,
  fivver,
  disrupt,
  toyota,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ui/Ux Designer",
    icon: uxui,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Wordpress Developer",
    icon: wpress,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Wordpress",
    icon: wpress,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Ambsan Technologies",
    icon: ambsan,
    iconBg: "#0F0F0F",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using HTML,CSS and Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance",
    icon: fivver,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developed custom websites and web applications from scratch.",
      "Optimized website performance and user experience through caching, code optimization, and responsive design.",
      "Collaborated with clients to achieve project goals, including design and functionality decisions, as well as ongoing support and maintenance.",
    ],
  },
  {
    title: "Junior RnD Engineer",
    company_name: "Disrupt Labs",
    icon: disrupt,
    iconBg: "#FFF",
    date: "June 2021 - June 2022",
    points: [
      "Developed and implemented electronic circuit designs for various projects using tools such as SPICE simulations and PCB design software.",
      "Assisted in the testing and validation of prototypes and provided feedback for design improvements to senior engineers.",
      "Conducted research and analyzed technical data to support product development and improve existing products.",
    ],
  },
  {
    title: "Product Development Intern",
    company_name: "Toyota - Indus Motor Corporation",
    icon: toyota,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Contributed to the development of new vehicle models by supporting prototype testing and conducting root cause analysis on any issues that arose during the testing phase.",
      "Worked with suppliers to coordinate the delivery of parts and components needed for the production of new vehicle models, ensuring timely and efficient production schedules.",
      "Participated in cross-functional teams to improve existing products, implementing cost-saving measures and identifying opportunities for product enhancements.",
      "Conducted market research and analyzed customer feedback to inform product design decisions and identify areas for improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ambsan Technologies Website",
    description:
      "A business website for a software development company. It is built using Wordpress with custom Js and CSS.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://Ambsan.com",
  },
  {
    name: "Portfolio Website for Client",
    description:
      "A portfolio website for a client. Built with pure HTML, CSS and JavaScript. The website has all the modern features including builtin dark mode to loight mode switch.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: " https://github.com/ijlal007/Ayesha-Portfolio",
  },
  {
    name: "Dragon Ball Z Characters",
    description:
      "A website that provides character profiles for various characters from Dragon Ball Z. Each profile includes an image of the character, their name, a brief description, and various stats. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ijlal007/DBZCHARS",
  },
];

export { services, technologies, experiences, testimonials, projects };
