import React from "react";
import { useRef, useState } from "react"; // It allow us to go inside the DOM and select something.
import { insertOrder } from "../modules/db"; // It provides the function isertOrder.

function CheckoutForm(props) {
  // We use props to receive the what comes from Basket --> Cart
  const [paymentCompleted, setPaymentCompleted] = useState();
  // 13. When the page loads the payment is not completed (false) --> But when we have a response from the server we want to set the payment to complete.
  const theForm = useRef(null);
  // The const response await until the insertOrder fetchs the data, why? If it does not need the data to do the things.
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: props.cart, // This should be a JSON with an array of objects inside. // The cart state.
    });
    console.log(response);
    // We do something with the response returned from insertOrder().
    if (response && response.length) {
      // If response is not null AND has a length asumme that is an array (How??)
      setPaymentCompleted(true);
      // 14. Now we have a variable that we can use in our UI.
    }
  }
  return (
    <>
      {/* 15. Ternary operator */}
      {paymentCompleted ? (
        <p>THANK YOU!!!</p>
      ) : (
        <form onSubmit={submit} ref={theForm}>
          <div className="FormControl">
            <label htmlFor="form-name">Name</label>
            <input required type="text" name="name" id="form-name"></input>
          </div>
          <div className="FormControl">
            <label htmlFor="form-email">Email</label>
            <input required type="text" name="email" id="form-email"></input>
          </div>
          <div className="FormControl">
            <label htmlFor="form-address">Address</label>
            <textarea required name="address" id="form-address"></textarea>
          </div>
          <button>PAY</button>
        </form>
      )}
    </>
  );
}

export default CheckoutForm;

// 1. First we tell the form on subit call the isertOrder() function
// 2. We define that function in a new file. db.js in modules.
// 3. insertOrder() fetch the data from the database and indicates the method 'POST'
// 4. Then we need to grab the form and for that we use { useRef }
// 5. In the tag form we add the atribute ref={}
// 6. The we create a new variable (const theForm) for that at the begining of the CheckoutForm function.
// 7. That variable is === to a function useRef()
// 8. Now the <form> and the const theForm are now conected.
// 9. We have now access to the DOM element with .current theForm.current.elements.name.value
