import "./App.css";

import profileImgSrc from "./images/profile.JPG";

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
          <div>
            <h1>Hi! I'm Ryan</h1>
            <p>I’m a Computer Science MSc student at Newcastle University</p>
            <button>Read more</button>
          </div>

          <img src={profileImgSrc} />
        </section>
      </main>
    </div>
  );
};

export default App;
