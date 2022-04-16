/* eslint-disable react/jsx-no-undef */
import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";

function Nav() {
  return (
    <>
      <StickyNav length="40" className="main-nav">
        <div>
          <a className="main-nav-link" href="#meals">
            👨🏽‍💻 Johnson Afuye
          </a>
        </div>
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#meals">
              About Me
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Project
            </a>
          </li>
          <li>
            <a className="main-nav-link btn-animated" href="#pricing">
              Contact
            </a>
          </li>
        </ul>
      </StickyNav>
    </>
  );
}

export default Nav;
