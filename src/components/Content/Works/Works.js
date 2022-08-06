import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { FaNodeJs, FaPassport, FaReact, FaAppStoreIos } from "react-icons/fa";
import {
  SiMongodb,
  SiPug,
  SiReactrouter,
  SiGithub,
  SiSteam,
  SiCsharp,
  SiUnity,
  SiGoogleplay,
  SiPhp,
  SiSquarespace,
} from "react-icons/si";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { DiJavascript1, DiCss3 } from "react-icons/di";
function Works() {
  return (
    <section className="projects-container">
      <h2 className="projects-container-title">My Work</h2>

      <div className="project-card-grid">
        <div className="project-card-container">
          <img className="project-card-image" alt="Project image" src="#" />
          <h3 className="project-card-title">HiveiQ</h3>
          <p className="project-card-description">
            Built with{" "}
            <a href="https://www.odoo.com/" target="blank">
              Odoo
            </a>
            , this site is the landing point for the ambitious HiveiQ startup,
            who aim to revolutionize the beekeeping industry. With $10 million
            in seed funding, they're well on their way to changing the world for
            the better.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://www.hiveiq.com/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                View it live
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://javascript.com" target="blank">
              <Chip
                icon={<DiJavascript1 />}
                label="Javascript"
                variant="outlined"
              />
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <img className="project-card-image" alt="Project image" src="#" />
          <h3 className="project-card-title">Australian Honeybee</h3>
          <p className="project-card-description">
            Built with{" "}
            <a href="https://www.joomla.org/" target="blank">
              Joomla
            </a>
            , this site facilitates thousands of transactions per year. After
            creating the website, business sales saw an increase of over 50%
            from 2015 to 2016.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://www.australianhoneybee.com.au/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                View it live
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://php.net" target="blank">
              <Chip icon={<SiPhp />} label="PHP" variant="outlined" />
            </a>
          </div>
        </div>

        <div className="project-card-container">
          <img className="project-card-image" alt="Project image" src="#" />
          <h3 className="project-card-title">PrimeTuning</h3>
          <p className="project-card-description">
            Built with{" "}
            <a href="https://www.squarespace.com/" target="blank">
              Squarespace
            </a>
            , this site showcases the life's work of Elaine Croker: medical
            intuitive and author. The creation of the website led to an increase
            in book sales by over 100% in the 2021 financial year.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://www.primetuning.com.au/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                View it live
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://www.squarespace.com" target="blank">
              <Chip icon={<SiPhp />} label="Squarespace" variant="outlined" />
            </a>
          </div>
        </div>

        <div className="project-card-container">
          <img className="project-card-image" alt="Project image" src="#" />
          <h3 className="project-card-title">Scholastic Kids: Home Base</h3>
          <p className="project-card-description">
            Scholastic Home Base is a safe, free, 3D interactive world that
            celebrates favorite stories through book-based games, live author
            events, and a large community of readers. I collaborated with
            developers and artists at{" "}
            <a href="https://www.blowfishstudios.com/" target="blank">
              Blowfish Studios
            </a>{" "}
            to build the user interface for the game in 2018.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://play.google.com/store/apps/details?id=com.scholastic.HomeBase&hl=en_US&gl=US"
              target="blank"
            >
              <button>
                <SiGoogleplay />
                View it on Google Play
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://apps.apple.com/us/app/home-base-by-scholastic/id1450869907"
              onclick='window.open("https://apps.apple.com/us/app/home-base-by-scholastic/id1450869907");return false;'
              target="blank"
            >
              <button>
                <FaAppStoreIos />
                View it on the App Store
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a
              href="https://docs.microsoft.com/en-us/dotnet/csharp/"
              target="blank"
            >
              <Chip icon={<SiCsharp />} label="C#" variant="outlined" />
            </a>
            <a href="https://unity.com" target="blank">
              <Chip icon={<SiUnity />} label="Unity" variant="outlined" />
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <img className="project-card-image" alt="Project image" src="#" />
          <h3 className="project-card-title">GunScape: Seismic</h3>
          <p className="project-card-description">
            Create maps, share them with your friends and blast your way through
            hordes of monsters! Seismic, the expansion pack for Gunscape,
            introduces a new level of tension to the game, adding ghoulish
            enemies and a suite of level-building blocks to the game’s already
            expansive set. I spearheaded the design, development and launch of
            the Seismic expansion pack in 2017 while working at{" "}
            <a href="https://www.blowfishstudios.com/" target="blank">
              Blowfish Studios
            </a>
            .
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://store.steampowered.com/app/703560/Gunscape__Seismic/"
              target="blank"
            >
              <button>
                <SiSteam />
                View it on Steam
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a
              href="https://docs.microsoft.com/en-us/dotnet/csharp/"
              target="blank"
            >
              <Chip icon={<SiCsharp />} label="C#" variant="outlined" />
            </a>
            <a href="https://unity.com" target="blank">
              <Chip icon={<SiUnity />} label="Unity" variant="outlined" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
