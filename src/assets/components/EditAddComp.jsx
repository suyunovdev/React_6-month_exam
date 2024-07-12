import { Link } from "react-router-dom";
import "../SASS/FooterAdd.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const EditAddComp = ({ form, name, id }) => {
  const [bool, setBool] = useState(false);

  const handleEdit = async () => {
    if (name.title && name.brand && name.rating ) {
      await axios.put(`http://localhost:3300/products/${id}`, name);
    }
  };

  useEffect(() => {
    if (name.title && name.brand && name.rating ) {
      setBool(true);
    }
  }, [name]);

  return (
    <div className="footer_add">
      <div className="container footer_add__container">
        <Link to={bool && "/"}>
          <button className="saved_btn btn" onClick={handleEdit} form={form}>
            Edit
          </button>
        </Link>
        <Link to="/">
          <button className="cancel_btn btn" type="submit">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditAddComp;
