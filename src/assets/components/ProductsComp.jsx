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
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/products", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      setProducts(data);
      setFiltered(data); // Set filtered products here
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [name]);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setFiltered(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text)
      )
    );
  };

  const handleDelete = async (dataId) => {
    if (window.confirm("Productni uchirasizmi ?")) {
      try {
        await axios.delete(`http://localhost:3000/products/${dataId}`);
        setFiltered(filtered.filter((product) => product.id !== dataId));
      } catch (error) {
        console.error("O'chirishda xato bor: ", error);
      }
    }
  };

  return (
    <div className="products">
      <div className="container products__container">
        <div className="products__title">
          <h2 className="products__text">All products ({filtered.length})</h2>
          <div className="search__box">
            <label htmlFor="search">
              <img src={search} alt="search" />
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
          {loading ? (
            <Loading />
          ) : (
            <table className="products__table">
              <thead>
                <tr className="table__title">
                  <th>ID</th>
                  <th className="name">Name</th>
                  <th className="brand">Brand</th>
                  <th>Price</th>
                  <th className="stock">Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((data, index) => (
                    <tr key={data.id} className="table__body">
                      <td>{index + 1}</td>
                      <td className="name">{data.title}</td>
                      <td className="brand">{data.brand}</td>
                      <td>{data.price}$</td>
                      <td className="stock">{data.stock}$</td>
                      <td>
                        <div className="btn_box">
                          <NavLink to={`/edit/${data.id}`}>
                            <button className="btn">
                              <img src={edit} alt="edit" />
                            </button>
                          </NavLink>
                          <button
                            className="btn"
                            onClick={() => handleDelete(data.id)}
                          >
                            <img src={del} alt="delete" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-data">
                      Product topilmadi.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsComp;
