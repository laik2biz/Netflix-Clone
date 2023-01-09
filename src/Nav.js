import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav" /* {`nav ${show && "nav__black"}`} */>
      <h1>
        <strong className="n-text">Nightflix </strong>
      </h1>
      <h1>
        <strong className="logout">
          Seats Back, Kick Back, Get Ready To Relax '
        </strong>
      </h1>
      <br />
      <Link to="/login">
        <h3 className="lightsout">
          Turn The <span className="lights">Lights</span> Off
        </h3>
      </Link>
    </div>
  );
}

export default Nav;
