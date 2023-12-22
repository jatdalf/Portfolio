import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jorge</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />Web Developer            
          </h1>
          <p className="hero--section-description">            
            Welcome to my digital playground where ideas come to life through lines of code.
            <br/><br/>Explore the synergy of creativity and technology in my portfolio.
          </p>
        </div>      
        <Link       
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"         
        >  
        <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/Jtoso-Hero.png" alt="Hero Section" />
      </div>
    </section>
  );
}
