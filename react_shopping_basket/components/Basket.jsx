export default function Basket(props) {
  // When we click in the button in Product.jsx we call addProduct() that adds a item/cart to the basket.
  // Here in the basket we MAP that cart to get the name, price and amount.
  // When a new cart is added getTotal() runs.
  // Then TOTAL is updated with the return of that function.

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
              <li>
                {item.productdisplayname} x {item.amount}, DKK {item.amount * item.price}
              </li>
            ))}
          </ul>
          <h3>Total: {getTotal()},-</h3>
        </div>
      </fieldset>
    </>
  );
}
