import { useState, useEffect } from "react";
import ListProducts from "../components/ListProducts";
import Basket from "../components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(0);

  // Fetching the data
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
      // console.log(data);
    }
    getData();
  }, []);

  // Function called by the button in the Product.jsx
  // data is the product --> Is the argument in the callback function (props.data)
  // We named it data because it is what Dev Tools shows --> props/data: and object with properties/values
  function addProduct(data) {
    // console.log("Add product:", data);
    const newProduct = { data };
    setProducts((emptyArray) => emptyArray.concat(newProduct));
    //Do we have the product ??
    if (cart.find((item) => item.id === data.id)) {
      // Checking if there in the basket is already an item with the same id (equal to the data/product added).
      console.log("it's there"); // If there is --> console, if not add it.
      // Map --> (We're still in addProduct) We loop through the array.
      setCart((array) =>
        array.map((item) => {
          if (item.id !== data.id) {
            // If the item has a different id from those in the basket, so add item to the basket.
            return item;
          }
          // But if it is not different (and is equal) create a copy and increase the amount by 1
          else {
            const copy = { ...item }; // Spread the copy to find amount.
            copy.amount = copy.amount + 1;
            return copy; // When it is working --> Set up the list in the Basket.jsx.
          }
        })
      );
    } else {
      setCart((array) => array.concat({ ...data, amount: 1 }));
    }
  }

  return (
    <div className="App">
      <ListProducts products={products} addProduct={addProduct} />
      <Basket products={products} cart={cart} />
      <button>LOAD MORE</button>
    </div>
  ); // Return ends
} // App ends

export default App;
