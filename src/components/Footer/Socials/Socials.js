import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Socials() {
  return (
    <div className="footer-socials-container">
      <a href="#">
        <button className="socials-icon">
          <FaYoutube />
        </button>
      </a>
      <a href="#">
        <button className="socials-icon">
          <FaGithub />
        </button>
      </a>
      <a href="#">
        <button className="socials-icon">
          <FaLinkedin />
        </button>
      </a>
      <a href="#">
        <button className="socials-icon">
          <MdEmail />
        </button>
      </a>
    </div>
  );
}

export default Socials;
