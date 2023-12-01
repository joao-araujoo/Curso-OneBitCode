import { Link, useParams } from "react-router-dom";
import products from "../database.json";

export default function Product() {
  const { productId } = useParams();

  // o "+" no começo de uma string converte-a para número
  const product = products.find((product) => product.id === +productId);

  if (!product) {
    return (
      <h2>Oops... Esse produto não foi encontrado =(</h2>
    )
  }

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <button>Comprar</button>
    </section>
  );
}
