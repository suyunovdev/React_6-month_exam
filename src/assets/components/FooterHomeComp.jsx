import { Link } from "react-router-dom";
import "../SASS/FooterHome.scss";

const FooterHomeComp = () => {
  return (
    <div className="footer_home">
      <div className="container footer_home_container">
        <Link to="/add" className="footer_home_link">
          <button className="footer_home_btn">+ New product</button>
        </Link>
        <p className="footer_home_text">&copy; Anymarket 2022</p>
      </div>
    </div>
  );
};

export default FooterHomeComp;
