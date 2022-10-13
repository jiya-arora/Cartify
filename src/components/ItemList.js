import React from "react";
import { Item } from "./Item";

export const ItemList = (props) => {
  return (
    <section className="cart-items">
      {props.itemsList.length > 0 ? (
        props.itemsList.map((item) => {
          return (
            <Item item={item} key={item.id} dispatch={props.dispatch}></Item>
          );
        })
      ) : (
        <h2>Your cart is empty!</h2>
      )}
    </section>
  );
};
