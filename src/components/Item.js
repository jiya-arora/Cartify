import React from "react";

export const Item = (props) => {
  return (
    <section className="row mt-3 cart-item">
      <div className="col-6 ">
        <h4 className="item-title">{props.item.name}</h4>
        <h4 className="item-price">₹{props.item.price}</h4>
      </div>
      <div className="col-4">
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-muted btn-outline-danger"
            onClick={() =>
              props.dispatch({ type: "DEC_QUANTITY", payload: props.item.id })
            }
          >
            -
          </button>
          <button type="button" className="btn btn-outline-primary">
            {props.item.quantity}
          </button>
          <button
            type="button"
            className="btn btn-muted btn-outline-danger"
            onClick={() =>
              props.dispatch({ type: "INC_QUANTITY", payload: props.item.id })
            }
          >
            +
          </button>
        </div>
      </div>

      <button
        className="col-2 btn remove-btn"
        onClick={() =>
          props.dispatch({ type: "REMOVE_ITEM", payload: props.item.id })
        }
      >
        Remove
      </button>
    </section>
  );
};
