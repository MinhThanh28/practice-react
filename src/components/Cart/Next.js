import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import NextItem from "./NextItem";

const Next = (props) => {

  const cartCtx = useContext(CartContext);

  const cartPersons = (
        <div>
        {cartCtx.persons.map((person) => (

          <NextItem
            name={person.name}
            street={person.street}
            city={person.city}
            postalCode={person.postalCode}
            country={person.country}
          ></NextItem>
          
          
        ))}
        
        </div>
        
    );

  return (
    cartPersons
  );
};

export default Next;
