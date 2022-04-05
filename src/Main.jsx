import "./App.css";
import Navbar from "./Navbar/Navbar";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className="item  item-1">
            👋 Hi! My name is Johnson. I am a Software engineer with a passion
            for physical computing. I want to improve the world with simple yet
            smart solutions.
          </div>
          <div className="img-container">
            <img
              src="img.jpg"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
        <div className="container2">
          <div className="item  item-1">
            I currently live in lagos, Nigeria, and am searching for new work
            opportunities starting July 2022. I am looking for a
            company/start-up/agency that can offer exciting product challenges,
            a passion for design, and a lovely culture.
          </div>
          <div className="item ">
            <h6> Brief resume</h6>
            <div className="hr"></div>
            <p className="company-name">Decagon</p>
            <p className="date">2021/08 ➡️ today</p>
            <p className="position">Software Engineer</p>
            <p className="company-name">zigatech</p>
            <p className="date">2022/02 ➡️ today</p>
            <p className="position">Backend Engineer</p>
            <p className="company-name">ultrabaesic consultancy</p>
            <p className="date">2019/11 ➡️ 2021/08</p>
            <p className="position">fullstack Engineer</p>{" "}
          </div>
          <div className="img-container">
            <img
              src="travelblog.png"
              className="hero-imgs"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
          <div className="project">
            <h6 className="project-title"> Nexta blog 〄</h6>
            <p>
              Nexta blog app creates an avenue to write about trips you have
              taken, what you learned during the trip and the experiences you
              had. It is a collection of adventures, stories, memories and
              discovery
            </p>
          </div>
          <div className="project">
            <h6 className="project-title"> Edugie Homes 🏕</h6>
            <p>
              Nexta blog app creates an avenue to write about trips you have
              taken, what you learned during the trip and the experiences you
              had. It is a collection of adventures, stories, memories and
              discovery
            </p>
          </div>
          <div className="img-container edugie-picture">
            <img
              src="edugie.png"
              className="hero-imgs"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
          <div className="img-container">
            <img
              src="cryptodev.png"
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
            <div className="btnp">View full project</div>{" "}
            <p className="company-name">Food recipe application</p>
            <p className="date">
              A food recipe management app that helps users to management food
              recipes.
            </p>
            <div className="btnp">View full project</div>{" "}
            <p className="company-name">
              DAO--decentralized-Autonomous-Organisation
            </p>
            <p className="date">
              This app is to allow crypto NFT holders to create and vote on
              proposals.
            </p>
            <div className="btnp">View full project</div>{" "}
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
              <img className="icon" alt="" src="link.gif" />
              <img className="icon" alt="" src="github.gif" />
              <img className="icon" alt="" src="twitter.gif" />
              <img className="icon" alt="" src="ig.gif" />
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
