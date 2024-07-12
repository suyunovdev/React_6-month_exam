import "../SASS/Sidebar.scss";
import logo from "../images/Logo.svg";
import settings from "../images/Settings.svg";
import add from "../images/AddPage.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo_box">
        <img src={logo} alt="logo image" />
      </div>
      <NavLink to="/">
        <div className="link_box">
          <img src={settings} alt="settings image" />
        </div>
      </NavLink>
      <NavLink to="/add">
        <div className="link_box">
          <img src={add} alt="add page image" />
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
