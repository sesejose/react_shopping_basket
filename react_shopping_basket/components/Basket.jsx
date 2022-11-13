import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
export default function Basket(props) {
  // When we click in the button in Product.jsx we call addProduct() that adds a item/cart to the basket.
  // Here in the basket we MAP that cart to get the name, price and amount.
  // When a new cart is added getTotal() runs.
  // Then TOTAL is updated with the return of that function.
  const [showForm, setShowForm] = useState(false);

  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <>
      <fieldset className="Basket">
        <legend>Basket</legend>
        <div>
          {/* <div>Products in the basket:</div> */}
          <ul>
            {props.cart.map((item) => (
              <li key={item.id}>
                {item.productdisplayname} x {item.amount}, DKK {item.amount * item.price},
                <button className="Remove" onClick={() => props.deleteCart(item.id)}>
                  {/* To avoid the function be executed without click we need to callback it with an anonimus function. We also use anonimus function bacause the function deleteCart() has an argument to be passed */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: {getTotal()},-</h3>
          {/* onClick in the Event in the button that turns the state of the form to true */}
          {/* The following are CONDITIONS and means --> if(showForm){<button....} */}
          {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
          {showForm && <CheckoutForm cart={props.cart} />}
          {/* We send the cart state to the checkoutForm(). The Basket.jsx already knows about the cart, here at the getTotal we define its value. */}
        </div>
      </fieldset>
    </>
  );
}
