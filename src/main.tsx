import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Skill = {
  title: string;
  items: string;
};

type Experience = {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
};

type Project = {
  stack: string;
  title: string;
  summary: string;
};

const skills: Skill[] = [
  {
    title: "Frontend",
    items: "React.js, TypeScript, JavaScript, Angular, HTML5, CSS3, responsive UI",
  },
  {
    title: "Automation & Testing",
    items: "Playwright, Cucumber BDD, Mailosaur, Postman, regression testing",
  },
  {
    title: "Languages",
    items: "TypeScript, JavaScript, Python, Java, SQL, C++",
  },
  {
    title: "DevOps & Tools",
    items: "Git, GitHub, GitHub Actions, Azure DevOps, AWS, CI/CD pipelines",
  },
  {
    title: "AI / ML",
    items: "Pandas, NumPy, Scikit-learn, PyTorch, LLMs, Groq API, Ollama",
  },
  {
    title: "Databases & APIs",
    items: "MySQL, REST APIs, OAuth 2.0, API integration, JSON workflows",
  },
];

const experiences: Experience[] = [
  {
    period: "Oct 2025 - Present",
    company: "VRIZE",
    role: "Associate Software Engineer - QA Automation",
    location: "Naya Raipur, Chhattisgarh",
    highlights: [
      "Developed automation frameworks across US, MX, and GT platforms, reducing release cycle time by 40%.",
      "Automated test scenarios using Playwright, Cucumber, Java, and IntelliJ IDEA.",
      "Implemented GitHub Actions CI/CD pipelines and tracked testing workflows in Azure DevOps.",
      "Validated quality workflows with Mailosaur and generated actionable test reports.",
    ],
  },
  {
    period: "2026",
    company: "Solo Project",
    role: "Full-Stack Frontend Developer",
    location: "Durg, Chhattisgarh",
    highlights: [
      "Built an AI interview prep app that generates role-specific questions and scores answers using LLM JSON output.",
      "Implemented lazy-loaded modules, route guards, HTTP interceptors, and RxJS caching/search flows.",
    ],
  },
  {
    period: "2024",
    company: "Oasis Infobyte",
    role: "Web Developer Intern",
    location: "Durg, Chhattisgarh",
    highlights: [
      "Built portfolio, landing page, and temperature converter applications with HTML5, CSS3, and JavaScript.",
      "Improved cross-device consistency through responsive layouts and browser testing.",
    ],
  },
];

const projects: Project[] = [
  {
    stack: "Agentic AI | SDLC Orchestration",
    title: "AI-driven software delivery workflows",
    summary:
      "Built prompt generation and user story automation workflows for SDLC orchestration, integrating QA automation, database checks, API validation, and CI/CD readiness.",
  },
  {
    stack: "Meeting Mind AI | GenAI",
    title: "Meeting intelligence and analytics pipeline",
    summary:
      "Engineered multilingual transcription, speaker diarization, summaries, action items, sentiment analysis, MoM generation, and Streamlit analytics using Groq API and Ollama.",
  },
  {
    stack: "Roster Management | React.js",
    title: "Responsive team roster system",
    summary:
      "Created a roster management app with React.js, MySQL, REST API integration, real-time CRUD operations, automated shift rotation, and Excel export support.",
  },
];

function Header() {
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <header className="site-header">
      <nav className="nav">
        <a className="brand" href="#home">
          Shreya Jirwankar
        </a>
        <ul className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Associate Software Engineer - QA Automation</p>
        <h1>React, TypeScript, automation, and AI workflows for reliable software.</h1>
        <p className="hero-copy">
          I am Shreya Jirwankar, a software engineer focused on Playwright automation,
          CI/CD, React frontends, and intelligent tools that help teams ship faster with
          confidence.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="/Shreya_Jirwankar_ASE3.pdf" download>
            Download Resume
          </a>
          <a
            className="btn secondary"
            href="https://github.com/Shreyajirwankar"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
        <div className="hero-stats" aria-label="Career highlights">
          <div>
            <strong>40%</strong>
            <span>release cycle reduction</span>
          </div>
          <div>
            <strong>9.3</strong>
            <span>B.Tech CPI</span>
          </div>
          <div>
            <strong>React + TS</strong>
            <span>current portfolio stack</span>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src="/bg.png.png" alt="" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div>
        <p className="section-kicker">About</p>
        <h2>Engineer with a QA-first mindset and a product builder's curiosity.</h2>
      </div>
      <p>
        I work across test automation, frontend development, DevOps workflows, and AI
        integrations. My experience includes building Playwright and Cucumber automation,
        managing Azure DevOps testing workflows, creating responsive React interfaces, and
        shipping GenAI tools with dashboards, analytics, and structured AI outputs.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Technical Skills</p>
        <h2>Updated stack for frontend, automation, DevOps, and AI delivery.</h2>
      </div>
      <div className="stack-callout">
        <span>Portfolio stack</span>
        <strong>React.js + TypeScript + Vite + CSS3</strong>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceList() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Recent roles and impact.</h2>
      </div>
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
            <div className="timeline-meta">
              <span>{experience.period}</span>
              <strong>{experience.company}</strong>
            </div>
            <div className="timeline-body">
              <h3>{experience.role}</h3>
              <p>{experience.location}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected work that blends automation, AI, and practical delivery.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.stack}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education-section">
      <div>
        <p className="section-kicker">Education</p>
        <h2>B.Tech in Electronics & Telecommunication</h2>
        <p>Bhilai Institute of Technology, Durg | Sep 2021 - Aug 2025</p>
      </div>
      <div className="grade-pill">CPI 9.3</div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Open to software engineering, QA automation, React, and AI-enabled product work.</h2>
      </div>
      <div className="contact-links">
        <a href="mailto:jirwankarshreya@gmail.com">jirwankarshreya@gmail.com</a>
        <a href="tel:+919174796495">+91 91747 96495</a>
        <a href="https://linkedin.com/in/shreya-jirwankar" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Shreyajirwankar" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceList />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <p>Copyright &copy; 2026 Shreya Jirwankar. All rights reserved.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
