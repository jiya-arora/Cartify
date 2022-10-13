import React, { useReducer, useEffect } from "react";
import { Form } from "../components/Form";
import { ItemList } from "../components/ItemList";
import { Footer } from "../components/Footer";
import { reducer } from "../components/reducer";
import { defaultState } from "../components/defaultState";

export function Home() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    setInterval(()=>{
     dispatch({type:"GET_TOTALS"})
    }, 100)
   });

  const Message = ({ dispatch, messageContent }) => {
    useEffect(() => {
      setTimeout(() => {
        dispatch({ type: "CLOSE_MESSAGE" });
      }, 2000);
    });
    return (
      <div className="message">
        <p>{messageContent}</p>
      </div>
    );
  };

  return (
    <>
      <main className="cart">
        <Form dispatch={dispatch} ></Form>
        {state.showMessage ? (
          <Message
            dispatch={dispatch}
            messageContent={state.messageContent}
          ></Message>
        ) : (
          <hr></hr>
        )}
        <ItemList itemsList={state.itemsList} dispatch={dispatch}></ItemList>
      </main>
      <Footer
        itemsList={state.itemsList}
        totalAmount={state.totalAmount}
        dispatch={dispatch}
      ></Footer>
    </>
  );
}
