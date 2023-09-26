export const navlinks = [
  { label: "START" },
  { label: "ABOUT" },
  { label: "WORK" },
  { label: "PROJECTS" },
  { label: "CONTACT" },
];

export const skills = [
  "Javascript",
  "Python",
  "SQL",
  "React.js",
  "Next.js",
  "TailwindCSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Jupyterlab",
];

export const experienceList = [
  {
    id: 0,
    title: "Computer Science and Information Technology, B.Tech",
    place: "Institute of Engineering & Science, IPS, Indore",
    points: [
      "Fundamentals and basics of CS concepts and multiple programming languages",
      "Operating Systems",
      "Database Management System",
      "Software development and Best Practices",
      "Machine Learning",
      "Information Technology",
    ],
    date: "July, 2019 - July, 2023",
    icon: (
      <svg
        fill="#ffffff"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="256px"
        height="256px"
        viewBox="0 0 31.664 31.664"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <polygon points="31.664,11.737 31.664,9.547 0,9.547 0,11.737 4.802,11.737 4.802,18.874 15.832,22.117 26.212,18.874 26.212,11.737 28.548,11.737 28.548,16.798 27.38,16.798 27.38,21.081 31.014,21.081 31.014,16.798 30.236,16.798 30.236,11.737 "></polygon>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Front-End Intern",
    place: "GG Enterprises",
    points: [
      "To plan and design the structure and design of web pages and React application.",
      "To optimize web pages for maximum speed and boost their scalability.",
      "To develop reusable code for future use.",
      "Coordinate and Work closely with the back-end team.",
      "To supervise software workflow management with project management tools (example, GitHub)",
    ],
    date: "October, 2021 - December, 2021",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-briefcase-fill h-8 w-8"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    place: "Freelance Work",
    points: [
      "Building applications using Javascript and Python",
      "Design and develop the front-end of the app using TailwindCSS and Next.js",
      "Build a secure backend using express.js",
      "Craft the app using best SEO practices  ",
    ],
    date: "January, 2022 - Current",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-briefcase-fill h-8 w-8"
        viewBox="0 0 16 16"
      >
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
      </svg>
    ),
  },
];

export const projectList = [
  {
    id: 1,
    title: "Blog - Titanium",
    img: "/assets/projects/site-titanium.webp",
    descrition:
      "A professionally crafted, responsive blog app prioritizes user experience, accessibility, and engagement. It features an intuitive interface, multi-platform compatibility, social interaction, personalization, and robust security. Performance optimization and SEO-friendliness enhance speed and visibility, while analytics tools empower content refinement. This comprehensive approach ensures a successful blogging platform with a focus on user satisfaction and performance.",
    using: [
      "Javascript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "MongoDB",
    ],
    live: "https://titanium-blond.vercel.app/",
    github: "https://github.com/Axolotlbyte/Titanium",
  },
  {
    id: 2,
    title: "Stock Forecast App - Apollo",
    img: "/assets/projects/site-apollo.webp",
    descrition:
      "A Python-based stock forecast app, powered by Facebook Prophet and designed using Streamlit for responsiveness, delivers accurate stock predictions in a user-friendly interface. Users input stock data to generate insightful forecasts, making it a valuable tool for investors.",
    using: [
      "Python",
      "Conda",
      "Streamlit",
      "Jupyterlab",
      "Fb Prophet",
      "Plot.ly",
      "Yahoo-finance",
    ],
    github: "https://github.com/Axolotlbyte/stock-prediction-app",
    live: "https://github.com/Axolotlbyte/stock-prediction-app"
  },
  {
    id: 3,
    title: "Dentist Website",
    img: "/assets/projects/site-dentist.webp",
    descrition:
      "A React-based dentist web app streamlines patient management with appointment forms and a work history section. Patients are kept informed through promotional content, while strong SEO ensures online visibility. Responsive design ensures a seamless user experience across devices. This app offers dental professionals an efficient tool for practice management and patient engagement.",
    using: [
      "Javascript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "MongoDB",
      "Nodemailer",
    ],
    live: "https://your-dentist.vercel.app/",
    github: "https://github.com/Axolotlbyte/your-dentist",
  },
  {
    id: 4,
    title: "Icecream Website",
    img: "/assets/projects/site-titanium.webp",
    descrition:
      "A professionally crafted, responsive blog app prioritizes user experience, accessibility, and engagement. It features an intuitive interface, multi-platform compatibility, social interaction, personalization, and robust security. Performance optimization and SEO-friendliness enhance speed and visibility, while analytics tools empower content refinement. This comprehensive approach ensures a successful blogging platform with a focus on user satisfaction and performance.",
    using: ["Javascript", "React.js", "Node.js", "CSS", "HTML"],
    live: "https://axolotlbyte.github.io/shopping-cart/#/",
    github: "https://github.com/Axolotlbyte/shopping-cart",
  },
  {
    id: 5,
    title: "Book Store - No Go",
    img: "/assets/projects/site-dentist.webp",
    descrition:
      "A React-based dentist web app streamlines patient management with appointment forms and a work history section. Patients are kept informed through promotional content, while strong SEO ensures online visibility. Responsive design ensures a seamless user experience across devices. This app offers dental professionals an efficient tool for practice management and patient engagement.",
    using: [
      "Javascript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "MongoDB",
      "Nodemailer",
    ],
    github: "",
    live: "https://axolotlbyte.github.io/book-shopping-page/#/",
  },
  {
    id: 6,
    title: "Memory Card Game",
    img: "/assets/projects/site-dentist.webp",
    descrition:
      "A React-based dentist web app streamlines patient management with appointment forms and a work history section. Patients are kept informed through promotional content, while strong SEO ensures online visibility. Responsive design ensures a seamless user experience across devices. This app offers dental professionals an efficient tool for practice management and patient engagement.",
    using: ["Javascript", "Webpack", "React", "HTML", "CSS"],
    github: "https://github.com/Axolotlbyte/Memory-Card/tree/master",
    live: "https://axolotlbyte.github.io/Memory-Card/",
  },
  {
    id: 7,
    title: "Old Portfolio Website",
    img: "/assets/projects/site-dentist.webp",
    descrition:
      "A React-based dentist web app streamlines patient management with appointment forms and a work history section. Patients are kept informed through promotional content, while strong SEO ensures online visibility. Responsive design ensures a seamless user experience across devices. This app offers dental professionals an efficient tool for practice management and patient engagement.",
    using: [
      "Javascript",
      "React.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Nodemailer",
    ],
    github: "",
    live: "https://axolotlbyte.github.io/book-shopping-page/#/",
  },
];

export const iconLinks = [
  {
    name: "instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-instagram h-6 w-6"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
    link: "https://www.instagram.com/axolotlbyte/",
  },
  {
    name: "medium",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-medium h-6 w-6 ml-4"
        viewBox="0 0 16 16"
      >
        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
      </svg>
    ),
    link: "https://medium.com/@axolotlbyte",
  },
  {
    name: "twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-twitter h-6 w-6 ml-4"
        viewBox="0 0 16 16"
      >
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
      </svg>
    ),
    link: "https://twitter.com/axolotlbyte",
  },
];
