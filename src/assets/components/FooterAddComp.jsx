import { Link, NavLink } from "react-router-dom";
import "../SASS/FooterAdd.scss";

const FooterAddComp = ({ handleAdd, form, bool }) => {
  return (
    <div className="footer_add">
      <div className="container footer_add__container">
        <NavLink to={bool && "/"}>
          <button className="saved_btn btn" onClick={handleAdd} form={form}>
            Saved
          </button>
        </NavLink>
        <Link to="/">
          <button className="cancel_btn btn" type="submit">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterAddComp;
