import "./App.css";

import profileImgSrc from "./images/profile.jpg";

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
        <section className="intro">
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
      </main>
    </div>
  );
};

export default App;
