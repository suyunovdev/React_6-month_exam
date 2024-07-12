// import { useState } from "react";
import "../SASS/NewProduct.scss";

const NewProduct = ({handleSubmit, form}) => {

  return (
    <div className="new_product">
      <div className="container new_product__container">
        <h2 className="basic__title">Basic</h2>
        <form className="basic__form" id={form} onChange={handleSubmit}>
          <div className="inp_box">
            <label htmlFor="title">Name</label>
            <input type="text" name="name" id="title" required/>
          </div>

          <div className="inp_box_card">
            <div className="inp_box">
              <label htmlFor="brand">Brand</label>
              <input type="text" name="brand" id="brand" required />
            </div>
            <div className="inp_box">
              <label htmlFor="rating">Rating</label>
              <input type="number" name="rating" id="rating" required/>
            </div>
          </div>

          <div className="inp_box">
            <label htmlFor="description">Description</label>
            <textarea
              name="desc"
              id="description"
              cols="30"
              rows="8"
              required
            ></textarea>
          </div>

          <div className="inp_pricing_card">
            <div className="inp_box">
              <label htmlFor="price">Pricing</label>
              <input type="number" name="pricing" id="price" />
            </div>
            <div className="inp_box">
              <label htmlFor="stock">Stock</label>
              <input type="number" name="stock" id="stock" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
