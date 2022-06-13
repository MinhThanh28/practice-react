import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import Next from "./Next"

const Cart = (props) => {
  const [isNext, setIsNext] = useState(false);

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // const hasItems = cartCtx.items.length > 0;
  const [hasItems, sethasItems] = useState(cartCtx.items.length > 0);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemDeleteHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  const putNextHandler = (person) => {
    // const arr= []
    // arr.push(person)
    // arr.map((per)=> (
      cartCtx.addNext({
      name: person.name,
      street: person.street,
      city: person.city,
      postalCode: person.postalCode,
      country: person.country,
      })
    // ))
//  console.log(arr)
  }

  const nextHandler = () => {
    setIsNext(true);
    setIsCheckout(false);
    sethasItems(false);
  };


  const orderHandler = () => {
    setIsCheckout(true);
  };



  const removeAllHandler = () => {
    cartCtx.clearCart();
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://e-commerce-60437-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
    //console.log(userData)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete={cartItemDeleteHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );


  const modalActions = (
    <div>
      <div className={classes.actions1}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
      <div className={classes.actions}>
        {hasItems && (
          <div >
            <button className={classes.button} onClick={orderHandler}>
              Checkout
            </button>
            <button className={classes.button} onClick={removeAllHandler}>
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} onNext={ nextHandler  } onConfirmNext={putNextHandler} />
      )}
      {!isCheckout && modalActions}
      {isNext && (
        <Next />
      )}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
