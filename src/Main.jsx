import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
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
          <div className="item ">
            I currently live in Brooklyn, NY, and am searching for new work
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
            <h6 className="project-title"> Nexta blog</h6>
            <p>
              Nexta blog app creates an avenue to write about trips you have
              taken, what you learned during the trip and the experiences you
              had. It is a collection of adventures, stories, memories and
              discovery
            </p>
          </div>
          <div className="project">
            <h6 className="project-title"> Edugie Homes</h6>
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
            <h6 className="project-title"> Nexta blog</h6>
            <p>
              This is a decentralized finance exchange Built with only one asset
              pair (Eth & Crypto Dev token). This Decentralized Exchange takes a
              fee of 1% on swaps. When a user adds liquidity, they are given
              Crypto Dev LP tokens. Crypto Dev LP tokens is be given propotional
              to the Ether user is willing to add to the liquidity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
