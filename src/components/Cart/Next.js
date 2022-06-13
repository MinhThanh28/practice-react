import React, { useContext } from "react";
// import classes from "./Next.module.css";
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

    // console.log(cartCtx.persons)

  // const modalActions = (
  //   <div>
  //     <div className={classes.actions1}>
  //       <button className={classes["button--alt"]} onClick={props.onClose}>
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    // <Modal onClose={props.onClose}>
    //   {!isSubmitting && !didSubmit && cartModalContent}
    //   {isSubmitting && isSubmittingModalContent}
    //   {!isSubmitting && didSubmit && didSubmitModalContent}
    // </Modal>
    cartPersons
    // <div>ABCDFJGIJI</div>,
    // modalActions
  );
};

export default Next;
