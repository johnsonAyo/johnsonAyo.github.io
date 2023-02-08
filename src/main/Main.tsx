import "../App.css";
import Navbar from "../Navbar/Navbar";
import Resume from "../resume";
import Icon from "../icon";
import {
  ProjectWrapper,
  ImageContainer,
  ProjectDetails,
  MoveInLeft,
  MoveInRight,
} from "./Main.styles";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="container" id="about">
          <div className="moveInLeft hero-1" id="about">
            👋 Hi! My name is Johnson. I am a Software engineer with a passion
            to improve the world with simple yet smart solutions.
          </div>
          <div className="img-container">
            <a
              href="https://github.com/johnsonAyo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                srcSet="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649157134/samples/WhatsApp_Image_2022-03-11_at_8.54.01_PM_crgq5a.jpg"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </a>
          </div>
        </div>
        <div className="container2">
          <div className="hero  hero-1">
            At the moment, I reside in Lagos, Nigeria. I am confident in my
            ability to add value to any organization as a highly motivated and
            meticulous software engineer with more than three years of
            experience creating, testing, and deploying software solutions.
          </div>
          <div className="hero ">
            <Resume />
          </div>
        </div>
        <h1 className="subheading" id="project">
          Personal Projects
        </h1>
        <ProjectWrapper>
          <div>
            <ImageContainer>
              <a
                href="https://www.edugietaste.com/"
                target="_blank"
                rel="noreferrer"
              >
                <MoveInLeft src="/edugie_page.png" alt="Edugie pics" />
              </a>
            </ImageContainer>

            <ProjectDetails>
              <a
                href="https://www.edugietaste.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h6> Edugie Taste 🏕</h6>
              </a>
              <p>
                This is a food menu application for edugie homes where customers
                can browse through the list of available meals with their
                respective prices and order for the desired meals.
              </p>
            </ProjectDetails>
          </div>
          <div>
            <ProjectDetails>
              <a
                href="https://www.edugietaste.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h6> Discover Africa 〄</h6>
              </a>

              <p>
                Discover Africa allows user to write about trips taken around
                african countries. It is a collection of adventures, stories,
                memories, discovery and to showcase and promote African
                Cultures.
              </p>
            </ProjectDetails>
            <ImageContainer>
              <a
                href="https://travel-stories-ashen.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <MoveInRight
                  src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649155463/samples/travelmobile_x2tyxl.jpg"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </a>
            </ImageContainer>
          </div>
          <div>
            <ImageContainer>
              <a
                href="https://droid-store-eef61.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <MoveInLeft
                  src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1650104393/Screenshot_2022-04-16_at_11.13.18_AM_l4rfow.jpg"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </a>
            </ImageContainer>

            <ProjectDetails>
              <a
                href="https://www.edugietaste.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h6> Jays Gadget Hub 〄</h6>
              </a>
              <p>
                This is an online store where you can order gadgets and other
                electronic devices. It has both the customer interface which
                requires having an account and an admin interface for adding and
                removing products being displayed at the customer page
              </p>
            </ProjectDetails>
          </div>
          <div>
            <ProjectDetails>
              <a
                href="https://www.edugietaste.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h6> Crypto Dev Defi 💲</h6>
              </a>
              <p>
                This is a decentralized finance exchange Built with only one
                asset pair (Eth & Crypto Dev token). This Decentralized Exchange
                takes a fee of 1% on swaps. When a user adds liquidity.
              </p>
            </ProjectDetails>
            <ImageContainer>
              <a
                href="https://defi-exchange-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <MoveInRight
                  src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649155463/samples/cryptomobile_uiokhn.jpg"
                  alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                />
              </a>
            </ImageContainer>
          </div>
        </ProjectWrapper>

        <div className="container2">
          <div className="hero-project ">
            <h6>More Projects</h6>
            <div className="hr"></div>
            <p className="company-name">Gofer</p>
            <p className="date">
              GOFER is an errand application that enables users to post tasks
              and other users to carry them out for a price.
            </p>
            <a
              href="https://github.com/johnsonAyo/gofer-backend"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btnp">Explore Project</button>
            </a>
            <p className="company-name">Food recipe application</p>
            <p className="date">
              A food recipe management app that helps users to management food
              recipes.
            </p>
            <a
              href="https://github.com/johnsonAyo/food-recipes-Api"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btnp">Explore Project</button>
            </a>
            <p className="company-name">
              DAO--decentralized-Autonomous-Organisation
            </p>
            <p className="date">
              This app is to allow crypto NFT holders to create and vote on
              proposals.
            </p>
            <a
              href="https://github.com/johnsonAyo/DAO-Decentralized_Autonomous_Organisation"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btnp">Explore Project</button>
            </a>
          </div>
          <Icon />
        </div>
        <div className="container2" id="contact">
          <div className="hero  hero-1">
            <p>Wanna Start a project?</p>
            <p>or</p>
            <p>Wanna say Hello ?</p>
            <div className="social  hero-icon">
              <a
                href="https://www.linkedin.com/in/johnson-a-b2763b162/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  alt=""
                  src="https://img.icons8.com/color/144/000000/linkedin.png"
                />
              </a>
              <a
                href="https://github.com/johnsonAyo"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  alt=""
                  src="https://img.icons8.com/color/144/000000/github.png"
                />
              </a>
              <a
                href="https://twitter.com/Ambiti0n____"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  alt=""
                  src="https://img.icons8.com/color/144/000000/twitter.png"
                />
              </a>
              <a
                href="mailto:johnsonafuye@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  alt=""
                  src="https://img.icons8.com/color/144/000000/gmail.png"
                />
              </a>
            </div>
            <h6>© Designed and built by Johnson Afuye</h6>
          </div>
          <div className="hero footer ">
            <Resume />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
