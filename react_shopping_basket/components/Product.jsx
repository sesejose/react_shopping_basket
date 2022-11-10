export default function Product(props) {
  return (
    <>
      <div className="Product">
        <img className="Image" src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt="" />
        <p className="Name">{props.data.productdisplayname}</p>
        <div className="Price_Add-to-Card">
          <p className="Price">DKK {props.data.price}</p>
          <button
            onClick={() => {
              props.addProduct(props.data);
              // We send the product (an object named "data") to the function addProduct in App.jsx
            }}
          >
            TILFØJ
          </button>
        </div>
      </div>
    </>
  );
}

// // {
//   "id": 1163,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Summer",
//   "productionyear": 2011,
//   "usagetype": "Sports",
//   "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//   "price": 895,
//   "discount": null,
//   "brandname": "Nike",
//   "soldout": 0
// }
