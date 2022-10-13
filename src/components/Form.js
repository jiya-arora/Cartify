import React, { useState } from "react";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      const newItem = {
        id: new Date().getTime().toString(),
        name,
        price,
        quantity: 1,
      };
      props.dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
      setPrice("");
    } else {
      props.dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <div className="row">
      <form className="row mb-1 " onSubmit={handleSubmit}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Item Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="itemName"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Item Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="itemPrice"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <button type="submit" className="btn col-4 submit-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};
