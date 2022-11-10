import Product from "./Product";

function ListProducts(props) {
  return (
    <>
      <section className="ListProducts">
        {props.products.map((product) => (
          <Product key={product.id} data={product} addProduct={props.addProduct}></Product>
          // The list just forward the function addProduct
          // data={product} --> In order to avoid the function addProduct be included in the return
          // data is how the product shows in the props / Developer tools / Components
        ))}
      </section>
    </>
  );
}

export default ListProducts;
