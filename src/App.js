import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCode,
  faMagnifyingGlass,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import profileImgSrc from "./images/profile.jpg";
import { faApple, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">
            <span className="number">25</span>
            <span className="letter">R</span>
          </div>

          <ul className="nav-links">
            <li>About</li>
            <li>Journey</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
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
            }}
          >
            <h1>Ryan Henzell-Hill</h1>

            <p>Designer, Developer, Student</p>
          </div>
        </section>

        <section id="about" className="about container">
          <h2>About Me</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faCode} />
              </div>

              <div>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
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

            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faServer} />
              </div>

              <div>
                <h3>Frontend Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
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

            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faApple} />
              </div>

              <div>
                <h3>iOS Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
