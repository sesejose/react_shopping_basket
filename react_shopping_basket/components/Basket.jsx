export default function Basket(props) {
  return (
    <>
      <fieldset className="Basket">
        <legend>Basket</legend>
        <div>
          <div>Products in the basket:</div>
          <ul>
            {props.cart.map((item) => (
              <li>
                {item.productdisplayname} x {item.amount}, DKK {item.amount * item.price}
              </li>
            ))}
          </ul>
        </div>
      </fieldset>
    </>
  );
}
