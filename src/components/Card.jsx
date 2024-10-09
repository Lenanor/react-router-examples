import { Link } from "react-router-dom";

import classes from "./Card.module.css";

function Card({ id, title, category = "unknown" }) {
  const categoryLower = category.toLowerCase();

  return (
    <article className={classes.article}>
      <Link to={`${categoryLower}-${id}`}>
        <h3>{title}</h3>
        <p>{category}</p>
      </Link>
    </article>
  );
}

export default Card;
