import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Socials() {
  return (
    <div className="socials-container">
      <h2 className="socials-title">Reach out to me</h2>
      <p className="socials-subtitle">
        You can find me at the following places:
      </p>
      <div className="socials-array-container">
        <a href="#">
          <button className="socials-icon">
            <MdEmail />
          </button>
        </a>
        <a href="#">
          <button className="socials-icon">
            <FaLinkedin />
          </button>
        </a>
        <a href="#">
          <button className="socials-icon">
            <FaGithub />
          </button>
        </a>
        <a href="#">
          <button className="socials-icon">
            <FaYoutube />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Socials;
