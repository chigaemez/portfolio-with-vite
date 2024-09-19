import { dash, portfolio, shopping, weather } from "../assets/image/Index";


export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Javascript.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Fixxers",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Database. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Optikkal Tech",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React"],
  },

  {
    year: "2021 - 2022",
    role: "Senior Full Stack Developer",
    company: "Smart ace Software Solution.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", ],
  },



];

export const PROJECT = [
  {
    title: "Netflix Clone WebApp",
    image: shopping,
    description: "A fully functional Netflix clone webApp with features like Movie listing, favorite movie adding, and user authentication.",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Firebase"],
  },
  {
    title: "Admin Dashbord",
    image: dash,
    description:
      "An application for managing tasks and projects, customers, and also seeing different type of charts  with features such as task creation, calender reminder, and checking charts.",
    technologies: ["HTML", "CSS", "Tailwind", "React", "Firebase"],
  },

  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Weather WebApp",
    image: weather,
    description:
      "A Web app that for checking weather information and updates  in various locations ",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
]



export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
