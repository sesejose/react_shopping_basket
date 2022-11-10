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

  // Function to be executed by the button in the basket
  // data is the product --> Is the argument in the callback function (props.data)
  // We named it data because it is what Dev Tools shows --> props/data: and object with properties/values
  function addProduct(data) {
    // console.log("Add product:", data);
    const newProduct = { data };
    setProducts((emptyArray) => emptyArray.concat(newProduct));
  }

  return (
    <div className="App">
      <ListProducts products={products} addProduct={addProduct} />
      <Basket products={products} />
      <button>LOAD MORE</button>
    </div>
  ); // Return ends
} // App ends

export default App;
