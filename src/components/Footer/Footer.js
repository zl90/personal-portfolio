import Logo from "../Header/Logo/Logo";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <Logo />
      <p>Learning, living & leveling-up every day.</p>
      <p>Website made by me.</p>
      <p>
        <a href="https://reactjs.org" target="blank">
          Built with <FaReact /> React
        </a>
      </p>
    </footer>
  );
}

export default Footer;
