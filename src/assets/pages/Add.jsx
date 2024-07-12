import { useEffect, useState } from "react";
import FooterAddComp from "../components/FooterAddComp";
import NewProduct from "../components/NewProduct";
import axios from "axios";

const Add = ({ name, setName, setLocation }) => {
  const [bool, setBool] = useState(false);

  const handleSubmit = (e) => {
    setName({ ...name, [e.target.id]: e.target.value });
  };
  const handleAdd = async () => {
    if (name.title && name.brand && name.rating && name.description) {
      await axios.post("http://localhost:3000/products", name);
    }
  };
  useEffect(() => {
    if (name.title && name.brand && name.rating && name.description) {
      setBool(true);
    }
  }, [name]);
  useEffect(() => {
    setLocation(location.pathname.length);
  }, []);
  return (
    <div>
      <NewProduct handleSubmit={handleSubmit} form="form" />
      <FooterAddComp handleAdd={handleAdd} form="form" bool={bool} />
    </div>
  );
};

export default Add;
