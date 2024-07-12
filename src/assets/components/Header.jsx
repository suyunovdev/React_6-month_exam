import { useEffect, useState } from "react";
import "../SASS/Header.scss";

const Header = ({ location }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (location == 1) {
      setTitle("Products");
    } else if (location == 4) {
      setTitle("New product");
    } else if (location == 7) {
      setTitle("Edit product");
    }
  }, [location]);

  return (
    <div className="header">
      <div className="container header__container">
        <h2 className="header__title">{title}</h2>
        <div className="header__link_box">
          <a href="#">Home</a>
          <span>/</span>
          <a href={location > 1 ? "/" : "#"}>Products</a>
          {location > 1 && <span>/</span>}
          {location > 1 && <a href="#">{title}</a>}
        </div>
      </div>
    </div>
  );
};

export default Header;
