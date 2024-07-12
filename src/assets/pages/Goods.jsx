import { useEffect } from "react";
import FooterHomeComp from "../components/FooterHomeComp";
import ProductsComp from "../components/ProductsComp";

const Goods = ({ name, setLocation }) => {
  useEffect(() => {
    setLocation(location.pathname.length);
  }, []);
  return (
    <div>
      <ProductsComp name={name} />
      <FooterHomeComp />
    </div>
  );
};

export default Goods;
