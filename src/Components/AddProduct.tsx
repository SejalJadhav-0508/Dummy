import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

export default function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    id: 0,
    name: "",
    price: 0,
    description: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  }

  const ADD_PRODUCT = gql`
    mutation Mutation($input: ProductInput) {
      addProduct(input: $input) {
        id
        name
      }
    }
  `;
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  console.log("data", data);

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addProduct({
              variables: {
                input: {
                    id: +productDetails.id,
                    name: productDetails.name,
                    price: +productDetails.price,
                    description: productDetails.description,
                },
              },
              // to observe what the mutation response returns
              onCompleted: (data) => {
                console.log("onCompleted",data);
              },
            });
          }}
        >
          <label htmlFor="id">Enter product id</label>
          <input type="number" value={productDetails.id} name="id" onChange={handleChange}/>

          <label htmlFor="name">Enter product name</label>
          <input type="text" value={productDetails.name} name="name" onChange={handleChange}/>

          <label htmlFor="price">Enter product price</label>
          <input type="number" value={productDetails.price} name="price" onChange={handleChange}/>

          <label htmlFor="description">Enter product description</label>
          <input type="text" value={productDetails.description} name="description" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
