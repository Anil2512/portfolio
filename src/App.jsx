import React from "react";
import "./App.css";
import profileImage from "./assets/WhatsApp Image 2026-09-17 at 9.12.54 PM.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = ({ profileImage }) => {

  const skills = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "78%" },
    { name: "Node.js", level: "75%" },
    { name: "Express.js", level: "72%" },
    { name: "MySQL", level: "75%" },
    { name: "Git & GitHub", level: "80%" },
  ];

  const projects = [
    {
      icon: "bi-cart4",
      title: "E-Commerce Website",
      description:
        "A modern e-commerce application with product management, authentication, shopping cart and backend API integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Anil2512/Ecommerce",
    },
    {
      icon: "bi-mortarboard",
      title: "Admission Portal",
      description:
        "An education admission platform for universities, courses, student enquiries and admission-related information.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      link: "https://admissionenquiry.com/",
    },
    {
      icon: "bi-chat-dots",
      title: "Chat Application",
      description:
        "A responsive chat application where users can connect, send messages and communicate through a simple interface.",
      technologies: ["React", "Node.js", "Socket.io"],
      link: "https://cahtzoom1-1.onrender.com",
    },
  ];

  return (
    
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar">
        <div className="container">

          <a className="navbar-brand" href="#home">
            <span className="brand-dot"></span>
            Anil Rathore
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  href="#contact"
                  className="btn btn-primary nav-contact-btn"
                >
                  Let's Talk
                </a>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">

        <div className="hero-grid"></div>

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-7">

              <div className="hero-content">

                <div className="available-badge">
                  <span></span>
                  Available for opportunities
                </div>

                <p className="hero-small-title">
                  HELLO, I'M
                </p>

                <h1>
                  Anil <span>Rathore</span>
                </h1>

                <h2>
                  Full Stack <strong>Web Developer</strong>
                </h2>

                <p className="hero-description">
                  I build modern, responsive and user-friendly web
                  applications using React.js, JavaScript, Node.js,
                  Express.js, MySQL and other modern technologies.
                </p>

                <div className="hero-buttons">

                  <a href="#projects" className="btn btn-primary btn-lg">
                    <i className="bi bi-code-slash me-2"></i>
                    View My Work
                  </a>

                  <a href="#contact" className="btn btn-outline-light btn-lg">
                    Contact Me
                    <i className="bi bi-arrow-up-right ms-2"></i>
                  </a>

                </div>

                <div className="hero-social">

                  <span>Follow me</span>

                  <a
                    href="https://github.com/Anil2512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a href="mailto:yourmail@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>

                </div>

              </div>

            </div>


            {/* HERO IMAGE */}

            <div className="col-lg-5">

              <div className="hero-image-wrapper">

                <div className="floating-card card-one">
                  <i className="bi bi-code-slash"></i>
                  <div>
                    <strong>Clean Code</strong>
                    <small>Modern Development</small>
                  </div>
                </div>

                <div className="profile-ring">

                  {/* <div className="profile-image">

                    <img
                      src={profileImage}
                      alt="Anil Rathore"
                    />

                  </div> */}
                  <div className="profile-image">
  <img
    src="/WhatsApp Image 2026-09-17 at 9.12.54 PM.jpeg"
    alt="Anil Rathore"
  />
</div>

                </div>

                <div className="floating-card card-two">
                  <i className="bi bi-laptop"></i>
                  <div>
                    <strong>Web Developer</strong>
                    <small>React & Node.js</small>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        <a href="#about" className="scroll-down">
          <i className="bi bi-mouse"></i>
          <span>Scroll Down</span>
        </a>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="container">

          <div className="stats-box">

            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat-item">
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat-item">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>

            <div className="stat-line"></div>

            <div className="stat-item">
              <h3>100%</h3>
              <p>Learning Mindset</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span>ABOUT ME</span>

            <h2>
              Turning Ideas Into
              <strong> Digital Experiences</strong>
            </h2>

            <p>
              A passionate developer focused on building useful,
              scalable and user-friendly web applications.
            </p>

          </div>


          <div className="row align-items-center g-5">

            <div className="col-lg-5">

              <div className="about-card">

                <div className="about-icon">
                  <i className="bi bi-person-workspace"></i>
                </div>

                <h3>Who I Am</h3>

                <p>
                  I am a Web Developer with 1 year of experience
                  building modern and responsive websites and
                  web applications.
                </p>

                <div className="about-info">

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Frontend Development
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Backend Development
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    API Integration
                  </div>

                  <div>
                    <i className="bi bi-check-circle-fill"></i>
                    Database Management
                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="about-content">

                <h3>
                  Passionate about creating
                  <span> meaningful web experiences.</span>
                </h3>

                <p>
                  I have hands-on experience working with frontend
                  and backend technologies. I enjoy converting ideas
                  into clean, responsive and functional web applications.
                </p>

                <p>
                  My technical skills include HTML, CSS, JavaScript,
                  React.js, Node.js, Express.js, MySQL, Bootstrap,
                  Git and GitHub.
                </p>

                <p>
                  I have worked on projects including an E-Commerce
                  Website, Admission Portal and Chat Application.
                  These projects have helped me improve my skills in
                  API integration, database management, authentication,
                  responsive design and full-stack development.
                </p>

                <a href="#contact" className="btn btn-primary">
                  Let's Work Together
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section section-padding">

  {/* Decorative Background */}
  <div className="skills-decoration skills-decoration-one"></div>
  <div className="skills-decoration skills-decoration-two"></div>

  <div className="container">

    {/* SECTION HEADING */}
    <div className="skills-heading text-center">

      <div className="skills-badge">
        <i className="bi bi-code-slash"></i>
        <span>MY SKILLS</span>
      </div>

      <div className="skills-title-line">
        <span></span>

        <h2>
          Technologies I
          <strong> Work With</strong>
        </h2>

        <span></span>
      </div>

      <p>
        Tools and technologies I use to build modern,
        <br className="d-none d-md-block" />
        responsive and scalable web applications.
      </p>

    </div>


    {/* SKILLS CARDS */}
    <div className="row g-3 g-lg-4 skills-grid">

      {skills.map((skill) => (

        <div
          className="col-lg-6"
          key={skill.name}
        >

          <div className={`skill-card ${skill.color}`}>

            {/* ICON */}
            <div className="skill-icon-box">
              <i className={`bi ${skill.icon}`}></i>
            </div>


            {/* CONTENT */}
            <div className="skill-content">

              <div className="skill-top">

                <div>
                  <h3>{skill.name}</h3>

                  <p>{skill.description}</p>
                </div>

                <strong>
                  {skill.level}
                </strong>

              </div>


              {/* PROGRESS */}
              <div className="skill-progress-bg">

                <div
                  className="skill-progress-fill"
                  style={{
                    width: skill.level
                  }}
                ></div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>


    {/* TECHNOLOGIES HEADING */}
    <div className="technology-heading text-center">

      <div className="skills-badge">
        <i className="bi bi-layers"></i>
        <span>TECHNOLOGIES</span>
      </div>

      <h2>
        Tools <strong>I Use</strong>
      </h2>

      <p>
        Here are some of the technologies and tools I work with.
      </p>

    </div>


    {/* TECHNOLOGY ICONS */}
    <div className="technology-grid">

      <div className="technology-item html">
        <div className="technology-icon">
          <i className="bi bi-filetype-html"></i>
        </div>
        <span>HTML</span>
      </div>


      <div className="technology-item css">
        <div className="technology-icon">
          <i className="bi bi-filetype-css"></i>
        </div>
        <span>CSS</span>
      </div>


      <div className="technology-item javascript">
        <div className="technology-icon">
          <i className="bi bi-filetype-js"></i>
        </div>
        <span>JavaScript</span>
      </div>


      <div className="technology-item react">
        <div className="technology-icon">
          <i className="bi bi-braces"></i>
        </div>
        <span>React</span>
      </div>


      <div className="technology-item node">
        <div className="technology-icon">
          <i className="bi bi-node-plus"></i>
        </div>
        <span>Node.js</span>
      </div>


      <div className="technology-item express">
        <div className="technology-icon">
          <i className="bi bi-server"></i>
        </div>
        <span>Express.js</span>
      </div>


      <div className="technology-item mysql">
        <div className="technology-icon">
          <i className="bi bi-database"></i>
        </div>
        <span>MySQL</span>
      </div>


      <div className="technology-item git">
        <div className="technology-icon">
          <i className="bi bi-git"></i>
        </div>
        <span>Git</span>
      </div>


      <div className="technology-item github">
        <div className="technology-icon">
          <i className="bi bi-github"></i>
        </div>
        <span>GitHub</span>
      </div>

    </div>

  </div>

</section>


      {/* ================= SERVICES ================= */}

      <section id="services" className="services-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span>WHAT I DO</span>

            <h2>
              My <strong>Services</strong>
            </h2>

            <p>
              I can help turn your ideas into functional and responsive
              digital products.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-md-6 col-lg-3">

              <div className="service-card">

                <div className="service-icon">
                  <i className="bi bi-window"></i>
                </div>

                <h4>Web Development</h4>

                <p>
                  Modern and responsive websites built with clean,
                  maintainable code.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="service-card">

                <div className="service-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <h4>React Development</h4>

                <p>
                  Interactive and dynamic web applications using React.js.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="service-card">

                <div className="service-icon">
                  <i className="bi bi-server"></i>
                </div>

                <h4>Backend Development</h4>

                <p>
                  REST APIs and backend applications using Node.js
                  and Express.js.
                </p>

              </div>

            </div>


            <div className="col-md-6 col-lg-3">

              <div className="service-card">

                <div className="service-icon">
                  <i className="bi bi-database"></i>
                </div>

                <h4>Database</h4>

                <p>
                  Database integration and data management using MySQL
                  and modern tools.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="projects-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span>MY WORK</span>

            <h2>
              Featured <strong>Projects</strong>
            </h2>

            <p>
              Some of the projects I have built while developing my skills.
            </p>

          </div>


          <div className="row g-4">

            {projects.map((project) => (

              <div className="col-lg-4" key={project.title}>

                <div className="project-card">

                  <div className="project-top">

                    <div className="project-icon">
                      <i className={`bi ${project.icon}`}></i>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-arrow"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </a>

                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">

                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                  </div>

                  <button
                    className="project-button"
                    onClick={() =>
                      window.open(project.link, "_blank")
                    }
                  >
                    View Project
                    <i className="bi bi-arrow-right"></i>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span>MY JOURNEY</span>

            <h2>
              Development <strong>Journey</strong>
            </h2>

            <p>
              My journey of learning, building and improving as a developer.
            </p>

          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>2026 - Present</span>

                <h3>Web Developer</h3>

                <p>
                  Working on real-world web applications and improving
                  frontend and backend development skills.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>2025 - 2026</span>

                <h3>Full Stack Development</h3>

                <p>
                  Learned React.js, Node.js, Express.js, APIs,
                  databases, Git and deployment workflows.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <span>Learning Journey</span>

                <h3>Frontend Development</h3>

                <p>
                  Started building responsive websites using HTML,
                  CSS, JavaScript and Bootstrap.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-box">

            <div>

              <span>HAVE A PROJECT IN MIND?</span>

              <h2>
                Let's build something
                <strong> amazing together.</strong>
              </h2>

            </div>

            <a href="#contact" className="btn btn-light btn-lg">
              Start a Conversation
              <i className="bi bi-arrow-up-right ms-2"></i>
            </a>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section section-padding">

        <div className="container">

          <div className="section-heading">

            <span>GET IN TOUCH</span>

            <h2>
              Let's <strong>Connect</strong>
            </h2>

            <p>
              Have an opportunity or project? Feel free to reach out.
            </p>

          </div>


          <div className="row g-5">

            <div className="col-lg-5">

              <div className="contact-info">

                <h3>Let's talk.</h3>

                <p>
                  I am open to discussing web development opportunities,
                  freelance projects and interesting ideas.
                </p>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <small>Email</small>
                    <a href="mailto:anilrathour17890@gmail.com">
                     anilrathour17890@gmail.com
                    </a>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-github"></i>
                  </div>

                  <div>
                    <small>GitHub</small>
                    <a
                      href="https://github.com/Anil2512"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/Anil2512
                    </a>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <small>Location</small>
                    <p>India</p>
                  </div>

                </div>


                <div className="contact-social">

                  <a href="https://github.com/Anil2512" target="_blank" rel="noreferrer">
                    <i className="bi bi-github"></i>
                  </a>

                <a
  href="https://www.linkedin.com/in/anil-rathore-175613268/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <i className="bi bi-linkedin"></i>
</a>
                    

                  <a href=" anilrathour17890@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>

                </div>

              </div>

            </div>


            <div className="col-lg-7">

              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >

                <div className="row g-3">

                  <div className="col-md-6">

                    <label>Your Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />

                  </div>


                  <div className="col-md-6">

                    <label>Your Email</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />

                  </div>


                  <div className="col-12">

                    <label>Subject</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="What is this about?"
                    />

                  </div>


                  <div className="col-12">

                    <label>Message</label>

                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Tell me about your project..."
                    ></textarea>

                  </div>


                  <div className="col-12">

                    <button className="btn btn-primary contact-submit">
                      Send Message
                      <i className="bi bi-send ms-2"></i>
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="portfolio-footer">

        <div className="container">

          <div className="footer-content">

            <div>

              <a href="#home" className="footer-brand">
                Anil Rathore
              </a>

              <p>
                Full Stack Web Developer building modern web experiences.
              </p>

            </div>


            <div className="footer-links">

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              © 2026 Anil Rathore. All Rights Reserved.
            </p>

            <p>
              Built with React.js
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default App;