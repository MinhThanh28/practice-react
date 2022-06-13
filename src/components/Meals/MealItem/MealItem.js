import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    // cartCtx.addItem({
    if (amount > 1) {
      cartCtx.addFewItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
        image: props.image,
      });
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
        image: props.image,
      });
    }
    
  };

  return (
    <li className={classes.meal}>
      <div>
      {/* <img src=`../../../assets/${props.image}` alt='' width="180" height="100" /> */}
      <img src={require(`../../../assets/${props.image}`)} alt='' width="180" height="100"/>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
