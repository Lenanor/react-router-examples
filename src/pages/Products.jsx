import Card from "../components/Card";

const DUMMY_PRODUCTS = [
  { id: 1, title: "Banana", category: "Fruit" },
  { id: 2, title: "Tomato", category: "Vegetable" },
  { id: 3, title: "Apple", category: "Fruit" },
  { id: 4, title: "Beer", category: "Beverage" },
  { id: 5, title: "Aspargus", category: undefined },
];

function Products() {
  return (
    <>
      <h1>Products</h1>
      <section>
        {DUMMY_PRODUCTS.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
          />
        ))}
      </section>
    </>
  );
}

export default Products;
