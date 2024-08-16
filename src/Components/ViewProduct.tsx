import { useQuery, gql } from "@apollo/client";

export default function ViewProducts() {
  const GET_PRODUCT = gql`
    query getProduct {
      products {
        id
        name
        price
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);

  return data.products.map(({ id, name, price, description }) => {
    return (
      <>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>price: {price}</p>
        <p>description: {description}</p>
      </>
    );
  });
}
