import { useState, useEffect } from "react";
import ListProducts from "../components/ListProducts";
import Basket from "../components/Basket";

function App() {
  const [products, setProducts] = useState([]);
  // const [page, setPage] = useState(0);
  // const [cards, setCards] = useState([]);

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
  // function addProduct(products) {
  //   console.log(`Add product ${products}`);
  //   const newProduct = [];
  //   setProducts((emptyArray) => emptyArray.concat(newProduct));
  // }

  return (
    <div className="App">
      <ListProducts products={products} />
      <Basket products={products} />
      <button>LOAD MORE</button>
    </div>
  ); // Return ends
} // App ends

export default App;
