import Logo from "../Header/Logo/Logo";
import Socials from "./Socials/Socials";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <Logo />
      <p>Learning, living & leveling-up every day.</p>
      <Socials />
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
