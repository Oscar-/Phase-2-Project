import NavBar from "../components/NavBar";

function About() {

    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>About</h1>
          <p>We created this...</p>
          <ul>
            <li>For students</li>
            <li>For teachers</li>
            <li>Because it's cool</li>
          </ul>
        </main>
      </>
    );
  }
  
  export default About;