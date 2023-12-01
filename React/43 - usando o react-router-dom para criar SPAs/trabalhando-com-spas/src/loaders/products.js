import products from "../database.json";

export default function loadProduct({ params }) {
  // o "+" no começo de uma string converte-a para número
  const product = products.find((product) => product.id === +params.productId);

  if (!product) {
    throw new Response("404 Not Found", { status: 404 })
  }

  return product;
}