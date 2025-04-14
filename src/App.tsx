import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Example from "./components/Example";
import StarIcon from "./components/StarIcon";
import Footerr from "./components/Footerr";

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

function Section({ title, content }: SectionProps) {
  return (
    <section className="section">
      <div className="section-header">
        <h3 className="section-title">↳ {title}</h3>
      </div>
      <div className="section-content w-full">{content}</div>
    </section>
  );
}

function App() {
  const name = "Raghav Senthilkumar";
  const navItems = [
    { label: "Projects", targetId: "projects-section" },
    { label: "Info", targetId: "portfolio-container-2" },
    { label: "Contact", targetId: "content" },
  ];

  return (
    <div className="base">
      <div className="portfolio-container">
        <Navbar name={name} navItems={navItems} />
        <Hero />
        <Footerr />
      </div>
      <div id="projects-section" className="projects-section">
        <Example />
      </div>
      <div id="portfolio-container-2" className="portfolio-container-2">
        <div className="side">
          <h1 className="projects_2">Info</h1>
          <StarIcon />
        </div>
        <hr className="my-4" />
        <Section
          title="Overview"
          content={
            <div className="overview-content">
              <div className="overview-text">
                <p>
                  Hi, I'm <strong>Raghav Senthilkumar</strong>, a{" "}
                  <strong>full-stack developer</strong> with a wide range of
                  experience across fields including{" "}
                  <strong>software development</strong>,{" "}
                  <strong>data analysis</strong>, and{" "}
                  <strong>AI-based systems</strong>. I've worked on various
                  teams, collaborating on projects involving{" "}
                  <strong>LLMs</strong>, <strong>data integration</strong>, and{" "}
                  <strong>website development</strong> for clients. I have honed
                  my skills in developing <strong>scalable data systems</strong>
                  , streamlining workflows, and leveraging{" "}
                  <strong>real-time data</strong> to enhance decision-making. My
                  projects provide <strong>custom digital solutions</strong>,
                  giving me a diverse skill set in both{" "}
                  <strong>software development</strong> and{" "}
                  <strong>data science</strong>.
                </p>
              </div>
            </div>
          }
        />
        <hr className="my-4" />
        <Section
          title="Skills"
          content={
            <div className="overview-content">
              <div className="overview-text">
                <p>
                  I possess proficiency in a wide range of programming
                  languages, including <strong>Python</strong>,{" "}
                  <strong>Java</strong>, <strong>JavaScript</strong>,{" "}
                  <strong>C</strong>, <strong>C#</strong>, <strong>R</strong>,
                  and <strong>TypeScript</strong>. My technical toolkit includes
                  frameworks and tools like <strong>AWS</strong>,{" "}
                  <strong>React</strong>, <strong>Flask</strong>,{" "}
                  <strong>Django</strong>, <strong>SQL</strong>,{" "}
                  <strong>REST APIs</strong>, <strong>Git</strong>, and{" "}
                  <strong>Microsoft 365</strong>. I am also well-versed in using
                  data structures, machine learning algorithms, and data
                  visualization techniques to create efficient and effective
                  solutions, particularly in the domains of data integration,
                  machine learning, and full-stack development.
                </p>
              </div>
            </div>
          }
        />
        <hr className="my-4" />
        <Section
          title="Education"
          content={
            <div className="overview-content">
              <div className="overview-text">
                <p>
                  Currently pursuing a Bachelor's in Computer Science at the{" "}
                  <strong>University of Maryland</strong>, with a Minor in
                  Economics, I have maintained a GPA of 3.92. Expected to
                  graduate in May 2027, my academic focus includes topics like{" "}
                  <strong>data science</strong>,{" "}
                  <strong>software engineering</strong>,{" "}
                  <strong>bioinformatics</strong>, and{" "}
                  <strong>econometrics</strong>. My coursework and research have
                  provided a strong theoretical and practical understanding of
                  various fields, enabling me to develop efficient and scalable
                  solutions. Additionally, my work with various agencies and
                  projects has allowed me to apply these skills in real-world
                  scenarios.
                </p>
              </div>
            </div>
          }
        />
      </div>

      <div className="content" id="content">
        <div className="logo-section">
          <div className="logo">
            <svg
              className="starburst"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="white">
                <path d="M50,0 L53.5,46.5 L58,36 L56,48 L70,38 L58,53 L80,50 L58,56 L76,68 L55,59 L65,80 L50,63 L40,82 L42,60 L25,72 L38,55 L18,52 L38,48 L20,38 L44,45 L35,25 L47,40 L50,0 Z" />
              </g>
            </svg>
          </div>
          <h1 className="lets-chat">Contact Me</h1>
        </div>

        <div className="email">raghav.senthilkumar05@gmail.com</div>

        <div className="number">609-874-4055</div>
        <div className="site-footer">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
              Resume
            </a>

            <a
              href="https://app.joinhandshake.com/profiles/6yupsf"
              target="_blank"
            >
              Handshake
            </a>
          </div>
          <div className="copyright">Raghav Senthilkumar</div>
        </div>
      </div>
    </div>
  );
}

export default App;
