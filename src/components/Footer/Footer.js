import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <LogoWhite />
      <p className="footer-title">Matthew B.</p>
      <p>Learning, living & leveling-up every day.</p>
      <p className="react-splash">
        <a className="react-splash" href="https://reactjs.org" target="blank">
          <FaReact /> Built with React
        </a>
      </p>
    </footer>
  );
}

function LogoWhite() {
  return (
    <div className="logo-white-container">
      <img
        className="logo-white"
        src={require("../../images/logo-white.png")}
        alt="Logo, white"
      />
    </div>
  );
}

export default Footer;
