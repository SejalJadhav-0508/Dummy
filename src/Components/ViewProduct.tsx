import { useQuery, gql } from "@apollo/client";

export default function ViewProducts() {
  const GET_PRODUCT = gql`
    query meriQuery {
      products {
        id
        name
        price
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.products.map(({ id, name, price }) => {
    console.log(id, name, price);
    return (
      <>
        <p>id: ${id}</p>
        <p>name: ${name}</p>
        <p>price: ${price}</p>
      </>
    );
  });
}
