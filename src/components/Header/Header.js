import { NavLink } from "react-router-dom";
import Logo from "../../resource/Fit4Happiness.png";
import "./Header.css";

function Header({ isLogin }) {
  return (
    <header>
      <div className="logo-section">
        <img src={Logo} alt="Fit4happiness-logo" className="main-logo" />
        <h4 className="logo-text">
          FIT<span>4</span>HAPPINESS
        </h4>
      </div>
      <ul>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT US
          </NavLink>
        </li>
        {isLogin && (
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PLAN
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FITNESS BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            COMMUNITY
          </NavLink>
        </li>
        <li>
          <img />
        </li>
      </ul>
    </header>
  );
}

export default Header;
