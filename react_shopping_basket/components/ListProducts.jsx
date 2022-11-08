import Product from "./Product";

function ListProducts(props) {
  return (
    <>
      <section className="ListProducts">
        {props.products.map((product) => (
          <Product key={product.id} {...product}></Product>
        ))}
      </section>
    </>
  );
}

export default ListProducts;
