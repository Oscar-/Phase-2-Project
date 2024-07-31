import NavBar from "../components/NavBar";

//component 2
function About() {

    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>About</h1>
          <p>We created this Flat Map App so that...</p>
          <ul>
            <li>Teachers can easily recommend their favorite restaurants and places around campus to their students</li>
            <li>Students can share their favorite hometown spots with others to get to know each other</li>
            <li>We could pass Phase II</li>
          </ul>
        </main>
      </>
    );
  }
  
  export default About;