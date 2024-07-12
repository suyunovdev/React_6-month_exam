import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProduct from "../components/EditProduct";
import EditAddComp from "../components/EditAddComp";

const Edit = ({ setLocation }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [name, setName] = useState({});

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:3300/products/${id}`);
    const data = res.data;
    setProduct(data);
  };

  useEffect(() => {
    fetchApi();
    setLocation(location.pathname.length);
  }, []);

  const data = {
    id: `${product.id}`,
    title: `${product.title}`,
    description: `${product.description}`,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    brand: `${product.brand}`,
  };

  useEffect(() => {
    setName(data);
  }, [product]);

  const handleSubmit = (e) => {
    setName({ ...name, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <EditProduct form={"connect"} name={name} handleSubmit={handleSubmit} />
      <EditAddComp name={name} form={"connect"} id={id} />
    </div>
  );
};

export default Edit;
