import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faBars,
  faCode,
  faEnvelope,
  faServer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import {
  faApple,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

import profileImgSrc from "./images/profile-background.jpg";
import foodFiestaPreview from "./images/food-fiesta-preview.png";
import pawnsOnlyChessPreview from "./images/pawns-only-chess-preview.png";
import websitePreview from "./images/website-preview.png";
import { useEffect, useRef, useState } from "react";

import { Fade, Slide } from "react-awesome-reveal";

const App = () => {
  const aboutRef = useRef();
  const journeyRef = useRef();
  const projectsRef = useRef();

  const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(0);
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(faBars);
  const [headerBackgroundColour, setHeaderBackgroundColour] = useState(
    "rgba(0, 0, 0, 0.85)"
  );

  useEffect(() => {
    setBackgroundImageOpacity(1);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });

    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    }
  };

  const handleHamburgerClick = () => {
    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    } else {
      setDropdownIsVisible(true);
      setHamburgerIcon(faXmark);
      setHeaderBackgroundColour("rgba(0, 0, 0)");
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: headerBackgroundColour }}>
        <Fade>
          <nav className="container">
            <div>
              <div className="logo" onClick={handleLogoClick}>
                <span className="number">25</span>
                <span className="letter">R</span>
              </div>

              <ul className="nav-links">
                <li onClick={() => scrollToSection(aboutRef)}>About</li>
                <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li>
                  <a href="mailto: ryan.henzell-hill@outlook.com">Contact</a>
                </li>
              </ul>

              <button onClick={handleHamburgerClick}>
                <FontAwesomeIcon className="icon" icon={hamburgerIcon} />
              </button>
            </div>

            {dropdownIsVisible && (
              <ul className="nav-links collapse">
                <li onClick={() => scrollToSection(aboutRef)}>About</li>
                <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
                <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
                <li>
                  <a href="mailto: ryan.henzell-hill@outlook.com">Contact</a>
                </li>
              </ul>
            )}
          </nav>
        </Fade>
      </header>

      <main>
        <section id="intro" className="intro">
          <div
            className="background-image"
            style={{
              backgroundImage: `
              linear-gradient( rgba(0, 0, 0, 0.7), 
              rgba(0, 0, 0, 0.55) ), 
              url(${profileImgSrc})
              `,
              opacity: backgroundImageOpacity,
            }}
          >
            <h1>Ryan Henzell-Hill</h1>

            <p>Designer, Developer, Student</p>
          </div>
        </section>

        <section className="about container">
          <div
            ref={aboutRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <Slide triggerOnce={true}>
            <h2>About Me</h2>
          </Slide>

          <Slide direction="right" triggerOnce={true}>
            <p className="section-intro">
              I'm currently studying a masters in Computer Science and have
              almost two years of coding experience. I love designing and
              developing everything from websites to mobile games and am
              constantly on the lookout for new challenges. I'm confident,
              curious and determined to improve my skills everyday.
            </p>
          </Slide>

          <div className="cards-container">
            <Slide direction="up" triggerOnce={true}>
              <div className="card">
                <div className="icon-container">
                  <FontAwesomeIcon className="icon" icon={faCode} />
                </div>

                <div>
                  <h3>Frontend Developer</h3>
                  <p className="description">
                    I have significant experience building frontend websites,
                    web apps and games
                  </p>
                </div>

                <div>
                  <h4>Languages</h4>
                  <p>JavaScript, HTML, CSS, SASS</p>
                </div>

                <div>
                  <h4>Frameworks</h4>
                  <p>React Js, jQuery</p>
                </div>
              </div>
            </Slide>

            <Slide direction="up" delay={250} triggerOnce={true}>
              <div className="card">
                <div className="icon-container">
                  <FontAwesomeIcon className="icon" icon={faServer} />
                </div>

                <div>
                  <h3>Backend Developer</h3>
                  <p className="description">
                    I have developed several full-stack web apps with user
                    authentication and profiles
                  </p>
                </div>

                <div>
                  <h4>Languages</h4>
                  <p>JavaScript</p>
                </div>

                <div>
                  <h4>Frameworks/Tools</h4>
                  <p>Node Js, Firebase</p>
                </div>
              </div>
            </Slide>

            <Slide direction="up" delay={500} triggerOnce={true}>
              <div className="card">
                <div className="icon-container">
                  <FontAwesomeIcon className="icon" icon={faApple} />
                </div>

                <div>
                  <h3>iOS Developer</h3>
                  <p className="description">
                    I have recently begun learning Swift and am developing a
                    password manager app for my masters project
                  </p>
                </div>

                <div>
                  <h4>Languages</h4>
                  <p>Swift</p>
                </div>

                <div>
                  <h4>Frameworks</h4>
                  <p>UIKit, SwiftUI</p>
                </div>
              </div>
            </Slide>
          </div>
        </section>

        <section className="journey">
          <div
            ref={journeyRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <div className="container">
            <Fade triggerOnce={true}>
              <h2>My Programming Journey</h2>
            </Fade>

            <div className="timeline">
              <div className="row">
                <div className="date-container container-lhs">
                  <Slide triggerOnce={true}>
                    <span>October 2018</span>
                  </Slide>

                  <div className="timeline-indicator"></div>
                  <div className="timeline-end"></div>
                </div>

                <div className="content-container container-rhs">
                  <Slide direction="right" triggerOnce={true}>
                    <div>
                      <h3>Durham University</h3>
                      <p className="hidden-date">June 2021</p>
                      <p>Chemistry BSc (Hons), Classification: 1st</p>
                      <p>Learned basic Excel skills</p>
                    </div>
                  </Slide>
                </div>
              </div>

              <div className="row reverse">
                <div className="content-container container-lhs">
                  <Slide triggerOnce={true}>
                    <div>
                      <h3>Helena Biosciences</h3>
                      <p className="hidden-date">July 2021</p>
                      <p>Technical Support Administrator</p>
                      <p>Learned VBA and Python to enhance productivity</p>
                    </div>
                  </Slide>
                </div>

                <div className="date-container container-rhs">
                  <Slide direction="right" triggerOnce={true}>
                    <span>July 2021</span>
                  </Slide>

                  <div className="timeline-indicator"></div>
                </div>
              </div>

              <div className="row">
                <div className="date-container container-lhs">
                  <Slide triggerOnce={true}>
                    <span>September 2022</span>
                  </Slide>

                  <div className="timeline-indicator"></div>
                </div>

                <div className="content-container container-rhs">
                  <Slide direction="right" triggerOnce={true}>
                    <div>
                      <h3>Newcastle University</h3>
                      <p className="hidden-date">September 2022</p>
                      <p>Computer Science MSc, Classification: Distinction</p>
                      <p>
                        Learned Java, SQL, JavaScript, HTML, CSS, Cybersecurity,
                        Computer Networks
                      </p>
                    </div>
                  </Slide>
                </div>
              </div>

              <div className="row reverse">
                <div className="content-container container-lhs">
                  <Slide triggerOnce={true}>
                    <div>
                      <h3>Lloyds Banking Group</h3>
                      <p className="hidden-date">September 2023</p>
                      <p>Technology Engineering Graduate</p>
                    </div>
                  </Slide>
                </div>

                <div className="date-container container-rhs">
                  <Slide direction="right" triggerOnce={true}>
                    <span>September 2023</span>
                  </Slide>

                  <div className="timeline-indicator"></div>
                  <div className="timeline-end"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects container">
          <div
            ref={projectsRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <Slide triggerOnce={true}>
            <h2>My Projects</h2>
          </Slide>

          <Slide direction="right" triggerOnce={true}>
            <p className="section-intro">
              I have built of number of projects in my spare time and at
              university. Some of my favourites are shown below. The Food Fiesta
              web app was developed in a team project which I led at university.
              The website below I created for a Sports Massage business in my
              local area. The Pawns Only Chess game was a personal project I
              created to play with my friends and family.
            </p>
          </Slide>

          <div className="previews-container">
            <Slide direction="up" triggerOnce={true}>
              <a
                href="https://food-fiesta-web-app.netlify.app"
                target="_blank"
                className="preview"
              >
                <img src={foodFiestaPreview} />

                <span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowUpRightFromSquare}
                  />
                  Food Fiesta Web App
                </span>
              </a>
            </Slide>

            <Slide direction="up" delay={250} triggerOnce={true}>
              <a
                href="https://rrsportsmassage.netlify.app/"
                target="_blank"
                className="preview"
              >
                <img src={websitePreview} />

                <span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowUpRightFromSquare}
                  />
                  Sports Massage Website
                </span>
              </a>
            </Slide>

            <Slide direction="up" delay={500} triggerOnce={true}>
              <a
                href="https://ryhhill1998.github.io/PawnsOnlyChessWebApp/"
                target="_blank"
                className="preview"
              >
                <img src={pawnsOnlyChessPreview} />

                <span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowUpRightFromSquare}
                  />
                  Pawns Only Chess Game
                </span>
              </a>
            </Slide>
          </div>
        </section>

        <section className="cta">
          <h2>Want to work with me?</h2>

          <p>I’m always open to discuss new opportunities.</p>

          <a href="mailto: ryan.henzell-hill@outlook.com">Get in touch</a>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="logo">
            <span className="number">25</span>
            <span className="letter">R</span>
          </div>

          <div className="links-container">
            <a
              href="https://twitter.com/ryanhenzellhill"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>

            <a
              href="https://www.linkedin.com/in/ryanhenzell-hill"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </a>

            <a
              href="https://github.com/Ryhhill1998"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>

            <a href="mailto: ryan.henzell-hill@outlook.com" className="link">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </div>

          <p className="copyright">
            <FontAwesomeIcon className="icon" icon={faCopyright} />
            Ryan Henzell-Hill
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
