import { Link, useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  return (
    <article>
      <h1>Params: {params.id}</h1>
      <p></p>
      <Link to=".." relative="path">
        Back
      </Link>
      <Link to=".." relative="route">
        Home
      </Link>
    </article>
  );
}

export default Product;
