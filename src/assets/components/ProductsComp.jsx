import { useEffect, useState } from "react";
import "../SASS/Products.scss";
import search from "../images/Search.svg";
import axios from "axios";
import edit from "../images/Edit.svg";
import del from "../images/Delete.svg";
import Loading from "./Loading";
import { NavLink } from "react-router-dom";

const ProductsComp = ({ name }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState(products);
  const [loading, setLoading] = useState(false);
  const fetchApi = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:3300/products");
    const data = res.data;
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  useEffect(() => {
    setFiltered(products);
  }, [products]);

  useEffect(() => {
    fetchApi();
  }, [name]);

  const handleSearch = (e) => {
    let text = e.target.value.toLowerCase();
    setFiltered(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text)
      )
    );
  };

  const handleDelete = (dataId) => {
    if (confirm("Are you delete this product, Sure")) {
      setFiltered(filtered.filter((product) => product.id !== dataId));
      axios.delete(`http://localhost:3300/products/${dataId}`);
    }
  };
  return (
    <div className="products">
      <div className="container products__container">
        <div className="products__title">
          <h2 className="products__text">All products({filtered.length})</h2>
          <div className="search__box">
            <label htmlFor="search">
              <img src={search} alt="search image" />
            </label>
            <input
              onChange={handleSearch}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
        <hr />
        <div className="products__data_box">
          <table className="products__table">
            <thead>
              <tr className="table__title">
                <th>ID</th>
                <th className="name">Артикул</th>
                <th className="name">Name</th>
                <th className="rating">Rating</th>
                <th className="brand">Brand</th>
                <th>Price</th>
                <th className="stock">Цена со скидкой</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loading && <Loading />}</td>
              </tr>
              {filtered.map((data, index) => (
                <tr key={data.id} className="table__body">
                  <td>{index + 1}</td>
                  <td className="id">{data.id}</td>
                  <td className="name">{data.name}</td>
                  <td className="rating">{data.code}</td>
                  <td className="brand">{data.brand}</td>
                  <td>{data.price}$</td>
                  <td className="stock">{data.priceInSale}$</td>
                  <td>
                    <div className="btn_box">
                      <NavLink to={`/edit/${data.id}`}>
                        <button className="btn">
                          <img src={edit} alt="edit image" />
                        </button>
                      </NavLink>
                      <button
                        className="btn"
                        onClick={() => handleDelete(data.id)}
                      >
                        <img src={del} alt="delete image" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsComp;
