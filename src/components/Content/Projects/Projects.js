import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { FaNodeJs, FaPassport, FaReact } from "react-icons/fa";
import { SiMongodb, SiPug, SiReactrouter, SiGithub } from "react-icons/si";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { DiJavascript1, DiCss3 } from "react-icons/di";
function Projects() {
  return (
    <section className="projects-container">
      <h2 className="projects-container-title">Personal Projects</h2>
      <div className="project-card-grid">
        <div className="project-card-container">
          <h3 className="project-card-title">CryptoNewZ API</h3>
          <p className="project-card-description">
            A REST API built with Node.js and MongoDB. CryptoNewZ pulls
            cryptocurrency articles from many sources, stores them in a database
            and serves them to clients in JSON form. Clients can freely GET all
            articles/comments, and POST comments on each article. Restricted
            resources require JSON Web Tokens to authenticate Admin users.
            Frontend coming soon!
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/crypto-newz-api"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://agile-coast-67507.herokuapp.com/articles"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://nodejs.org" target="blank">
              <Chip icon={<FaNodeJs />} label="Node.js" variant="outlined" />
            </a>
            <a href="https://expressjs.com" target="blank">
              <Chip icon={<FaNodeJs />} label="Express.js" variant="outlined" />
            </a>
            <a href="https://mongoosejs.com" target="blank">
              <Chip
                icon={<FaNodeJs />}
                label="Mongoose.js"
                variant="outlined"
              />
            </a>
            <a href="https://mongodb.com" target="blank">
              <Chip icon={<SiMongodb />} label="MongoDB" variant="outlined" />
            </a>
            <a href="https://passportjs.org" target="blank">
              <Chip
                icon={<FaPassport />}
                label="Passport.js"
                variant="outlined"
              />
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <h3 className="project-card-title">Members Only</h3>
          <p className="project-card-description">
            Only registered members can post! This is a CRUD app built on
            Express.js and MongoDB, hosted on Heroku, frontend built with
            Pug.js. This project uses Passport.js to authenticate users. Users
            can register, log in and write stories to post on the main wall.
            Each user has access to a "My Account" page which displays account
            information. Only registered users can post stories, and can delete
            their own stories after posting. Additionally, only registered users
            can see the authors of each story. Go ahead: sign up, post your
            story and join in on the fun!
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/members-only"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://powerful-lowlands-74616.herokuapp.com/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://nodejs.org" target="blank">
              <Chip icon={<FaNodeJs />} label="Node.js" variant="outlined" />
            </a>
            <a href="https://expressjs.com" target="blank">
              <Chip icon={<FaNodeJs />} label="Express.js" variant="outlined" />
            </a>
            <a href="https://mongoosejs.com" target="blank">
              <Chip
                icon={<FaNodeJs />}
                label="Mongoose.js"
                variant="outlined"
              />
            </a>
            <a href="https://mongodb.com" target="blank">
              <Chip icon={<SiMongodb />} label="MongoDB" variant="outlined" />
            </a>
            <a href="https://passportjs.org" target="blank">
              <Chip
                icon={<FaPassport />}
                label="Passport.js"
                variant="outlined"
              />
            </a>
            <a href="https://pugjs.org" target="blank">
              <Chip icon={<SiPug />} label="Pug.js" variant="outlined" />
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <h3 className="project-card-title">PC Part Picker</h3>
          <p className="project-card-description">
            A CRUD PC hardware catalog built on Express.js and MongoDB, hosted
            on Heroku. PC Part Picker allows users to add PC parts,
            manufacturers, and categories, and allows them to add these parts to
            a list to plan out their build. The total dollar amount is displayed
            and links are provided to purchase these parts. Users can create,
            read, update and delete PC parts, manufacturers and categories.
            Additionally, users can upload images for each PC part.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/express-pc-part-picker"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://tragically-leaf-51585.herokuapp.com/list"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
              </button>
            </a>
          </div>
          <div className="project-card-chip-array-container">
            <a href="https://nodejs.org" target="blank">
              <Chip icon={<FaNodeJs />} label="Node.js" variant="outlined" />
            </a>
            <a href="https://expressjs.com" target="blank">
              <Chip icon={<FaNodeJs />} label="Express.js" variant="outlined" />
            </a>
            <a href="https://mongoosejs.com" target="blank">
              <Chip
                icon={<FaNodeJs />}
                label="Mongoose.js"
                variant="outlined"
              />
            </a>
            <a href="https://mongodb.com" target="blank">
              <Chip icon={<SiMongodb />} label="MongoDB" variant="outlined" />
            </a>

            <a href="https://pugjs.org" target="blank">
              <Chip icon={<SiPug />} label="Pug.js" variant="outlined" />
            </a>
          </div>
        </div>
        <div className="project-card-container">
          <h3 className="project-card-title">Shopping Cart Frontend</h3>
          <p className="project-card-description">
            A shopping cart where users can add items and adjust their order
            quantities. Users can also filter product types in the Shop page. I
            built this project to get familiar with using React Hooks, React
            Router and the MUI framework.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/shopping-cart"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://zl90.github.io/shopping-cart/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
              </button>
            </a>
          </div>

          <div className="project-card-chip-array-container">
            <a href="https://reactjs.org" target="blank">
              <Chip icon={<FaReact />} label="React.js" variant="outlined" />
            </a>
            <a href="https://reactrouter.com" target="blank">
              <Chip
                icon={<SiReactrouter />}
                label="React Router"
                variant="outlined"
              />
            </a>
            <a href="https://mui.com" target="blank">
              <Chip icon={<FaReact />} label="MUI" variant="outlined" />
            </a>
          </div>
        </div>

        <div className="project-card-container">
          <h3 className="project-card-title">Simpsons Memory Game</h3>
          <p className="project-card-description">
            A memory game where the user must avoid clicking the same card
            twice. I built this project to get familiar with using React Hooks
            and the MUI framework.
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/memory-card"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://zl90.github.io/memory-card"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
              </button>
            </a>
          </div>

          <div className="project-card-chip-array-container">
            <a href="https://reactjs.org" target="blank">
              <Chip icon={<FaReact />} label="React.js" variant="outlined" />
            </a>

            <a href="https://mui.com" target="blank">
              <Chip icon={<FaReact />} label="MUI" variant="outlined" />
            </a>
          </div>
        </div>

        <div className="project-card-container">
          <h3 className="project-card-title">Weather App</h3>
          <p className="project-card-description">
            Weather tracking app built with vanilla Javascript. Search local
            weather conditions in this user-friendly, mobile-responsive webapp.
            Weather data is pulled from the{" "}
            <a href="https://openweathermap.org/api" target="blank">
              Open Weather Map API
            </a>
            . Go ahead, search your home town to see the current weather
            conditions!{" "}
          </p>
          <div className="project-card-links-container">
            <a
              className="project-card-link"
              href="https://github.com/zl90/weather-app"
              target="blank"
            >
              <button>
                <SiGithub />
                Github
              </button>
            </a>
            <a
              className="project-card-link"
              href="https://zl90.github.io/weather-app/"
              target="blank"
            >
              <button>
                <BsArrowUpRightCircleFill />
                Live Demo
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
            <a href="https://www.w3schools.com/css/" target="blank">
              <Chip icon={<DiCss3 />} label="CSS" variant="outlined" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
