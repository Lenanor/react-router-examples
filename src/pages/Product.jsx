import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  return (
    <article>
      <h1>Params: {params.id}</h1>
      <p></p>
    </article>
  );
}

export default Product;
