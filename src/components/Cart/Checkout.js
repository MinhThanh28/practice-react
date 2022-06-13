import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
import Select from "react-select";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    country: true,
  });

  const [selectedValue, setSelectedValue] = useState();

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  // const countryInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = selectedValue;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      country: enteredCountryIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredCountryIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
      country: enteredCountry,
    });
  };

// **********************************************************************************************************************************************************






const nextHandler = (event) => {
  
  event.preventDefault();

  const enteredName = nameInputRef.current.value;
  const enteredStreet = streetInputRef.current.value;
  const enteredPostalCode = postalCodeInputRef.current.value;
  const enteredCity = cityInputRef.current.value;
  const enteredCountry = selectedValue;

  const enteredNameIsValid = !isEmpty(enteredName);
  const enteredStreetIsValid = !isEmpty(enteredStreet);
  const enteredCityIsValid = !isEmpty(enteredCity);
  const enteredCountryIsValid = !isEmpty(enteredCountry);
  const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

  setFormInputsValidity({
    name: enteredNameIsValid,
    street: enteredStreetIsValid,
    city: enteredCityIsValid,
    postalCode: enteredPostalCodeIsValid,
    country: enteredCountryIsValid,
  });

  const formIsValid =
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid &&
    enteredCountryIsValid;

  if (!formIsValid) {
    return;
  }

  props.onConfirmNext({
    name: enteredName,
    street: enteredStreet,
    city: enteredCity,
    postalCode: enteredPostalCode,
    country: enteredCountry,
  });

  props.onNext()
};








// **********************************************************************************************************************************************************

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

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

  const countrylist = [
    {
      value: "vietnamese",
      label: "Vietnamese",
    },
    {
      value: "france",
      label: "France",
    },
    {
      value: "cam",
      label: "Cambodia",
    },
    {
      value: "laos",
      label: "Laos",
    },
  ];

  // set value for default selection

  // handle onChange event of the dropdown

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>

      <div className={countryControlClasses}>
        <label  htmlFor="country">Country</label>
          <Select
            className={classes.option}
            id="country"
            placeholder="Select Country"
            value={countrylist.find((obj) => obj.value === selectedValue)} // set selected value
            options={countrylist} // set list of the data
            onChange={handleChange} // assign onChange function
          />
        {!formInputsValidity.country && <p>Please enter a valid country!</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="button" onClick={nextHandler}>
          Next
        </button>
        <button className={classes.submit}>Order</button>
      </div>
    </form>
  );
};

export default Checkout;
