import "./App.css";
import Navbar from "./Navbar/Navbar";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className="moveInLeft item-1">
            👋 Hi! My name is Johnson. I am a Software engineer with a passion
            for physical computing. I want to improve the world with simple yet
            smart solutions.
          </div>

          <img
            srcSet="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649157134/samples/WhatsApp_Image_2022-03-11_at_8.54.01_PM_crgq5a.jpg"
            className="hero-img"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
          />
        </div>
        <div className="container2">
          <div className="item  item-1">
            I currently live in lagos, Nigeria, and am searching for new work
            opportunities as a software Engineer. I am looking for a
            company/start-up/agency that can offer exciting product challenges,
            a passion for design, and a lovely culture.
          </div>
          <div className="item ">
            <h6> Brief resume</h6>
            <div className="hr"></div>
            <p className="company-name">Decagon</p>
            <p className="date">2021/08 ➡️ today</p>
            <p className="position">Software Engineer</p>
            <p className="company-name">Zigatech</p>
            <p className="date">2022/02 ➡️ today</p>
            <p className="position">Backend Engineer</p>
            <p className="company-name">Ultrabaesic consultancy</p>
            <p className="date">2019/11 ➡️ 2021/08</p>
            <p className="position">Fullstack Engineer</p>{" "}
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649155463/samples/travelmobile_x2tyxl.jpg"
              className="hero-imgs"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
          <div className="project">
            <h6 className="project-title"> Discover Africa 〄</h6>
            <p>
              Discover Africa creates an avenue to write about trips you have
              taken around african countries, what you learned during the trip
              and the experiences you had. It is a collection of adventures,
              stories, memories, discovery and also to showcase and promote
              African Cultures.
            </p>
          </div>
          <div className="project">
            <h6 className="project-title"> Edugie Homes 🏕</h6>
            <p>
              This is a food menu application for edugie homes where customers
              can browse through the list of available meals with their
              respective prices and order for the desired meals.
            </p>
          </div>
          <div className="img-container edugie-picture">
            <img
              src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649155465/samples/edugemobile_dh38fg.jpg"
              className="hero-imgs"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dfi24gqb6/image/upload/v1649155463/samples/cryptomobile_uiokhn.jpg"
              className="hero-imgs"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
          <div className="project">
            <h6 className="project-title"> Crypto Dev Defi 💲 </h6>
            <p>
              This is a decentralized finance exchange Built with only one asset
              pair (Eth & Crypto Dev token). This Decentralized Exchange takes a
              fee of 1% on swaps. When a user adds liquidity, they are given
            </p>
          </div>
        </div>
        <div className="container2 grey">
          <div className="item-project ">
            <h6>More Projects</h6>
            <div className="hr"></div>
            <p className="company-name">Gofer</p>
            <p className="date">
              GOFER is an errand application that enables users to post tasks
              and other users to carry them out for a price.
            </p>
            <a href="https://github.com/johnsonAyo/gofer-backend">
              <button className="btnp">Explore Project</button>
            </a>
            <p className="company-name">Food recipe application</p>
            <p className="date">
              A food recipe management app that helps users to management food
              recipes.
            </p>
            <a href="https://github.com/johnsonAyo/food-recipes-Api">
              <button className="btnp">Explore Project</button>
            </a>
            <p className="company-name">
              DAO--decentralized-Autonomous-Organisation
            </p>
            <p className="date">
              This app is to allow crypto NFT holders to create and vote on
              proposals.
            </p>
            <a href="https://github.com/johnsonAyo/DAO-Decentralized_Autonomous_Organisation">
              <button className="btnp">Explore Project</button>
            </a>
          </div>
          <div className="item  item-icon">
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/144/000000/react-native.png"
            />
            <img className="icon" alt="" src="js.gif" />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/960/000000/typescript.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/960/000000/nodejs.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/960/000000/mongodb.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/postgreesql.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/css3.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/sass.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/960/000000/html-5--v2.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/ethereum.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/firebase.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/graphql.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/git.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/redux.png"
            />
            <img
              className="icon"
              alt=""
              src="https://img.icons8.com/color/480/000000/docker.png"
            />
          </div>
        </div>
        <div className="container2">
          <div className="item  item-1">
            <p>Wanna Start a project?</p>
            <p>or</p>
            <p>Wanna say Hello ?</p>
            <div className="social  item-icon">
              <a href="hhttps://www.linkedin.com/in/johnson-a-b2763b162/">
                <img className="icon" alt="" src="link.gif" />
              </a>
              <a href="https://github.com/johnsonAyo">
                <img className="icon" alt="" src="github.gif" />
              </a>
              <a href="https://twitter.com/Ambiti0n____">
                <img className="icon" alt="" src="twitter.gif" />
              </a>
              <a href="mailto:johnsonafuye@gmail.com">
                <img className="icon" alt="" src="gmail.gif" />
              </a>
            </div>
            <h6>© Designed and built by Johnson Afuye.</h6>
          </div>
          <div className="item footer ">
            <h6> Brief resume</h6>
            <div className="hr"></div>
            <p className="company-name">Decagon</p>
            <p className="date">2021/08 ➡️ today</p>
            <p className="position">Software Engineer</p>
            <p className="company-name">Zigatech</p>
            <p className="date">2022/02 ➡️ today</p>
            <p className="position">Backend Engineer</p>
            <p className="company-name">Ultrabaesic consultancy</p>
            <p className="date">2019/11 ➡️ 2021/08</p>
            <p className="position">Fullstack Engineer</p>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
