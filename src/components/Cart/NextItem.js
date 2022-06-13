 import { useState } from "react";
import classes from "./NextItem.module.css";


const NextItem = (props) => {
  const [formInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    country: true,
  });



  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;
  const countryControlClasses = `${classes.control} ${
    formInputsValidity.country ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} >
      <div className={nameControlClasses}>
        <label htmlFor="name">  *********   Your Name   **********</label>
        <label1 type="text" id="name"> {props.name} </label1>
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">  *********   Street   **********</label>
        <label1 type="text" id="street"> {props.street} </label1>
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">  *********    Postal Code   **********</label>
        <label1 type="text" id="postal"> {props.postalCode} </label1>
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">  *********   City   **********</label>
        <label1 type="text" id="city"> {props.city} </label1>
      </div>
      <div className={countryControlClasses}>
        <label htmlFor="country">  **********   Country   *********</label>
        <label1 type="text" id="country"> {props.country} </label1>
      </div>

      

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="button" >
          Pay
        </button>
      </div>
    </form>
  );
};

export default NextItem;
