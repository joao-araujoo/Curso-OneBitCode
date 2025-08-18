import Image from "next/image";
import product from "./interfaces/Product";

const products: product[] = [
  {
    name: "Macbook Air de 13 e 15 pol.",
    chipset: "Chip M2 ou M3",
    description:
      "Superfinos erápidos para trabalhar, jogar ou criar aonde quer que você vá.",
    price: "A partir de R$ 916,58/mês ou R$ 10.999*",
    imageSrc:
      "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
  },
  {
    name: "Macbook Pro de 14 e 16 pol.",
    chipset: "Chip M3, M3 Pro ou M3 Max",
    description:
      "Os notebooks Mac mais avançados para fluxos de trabalho pesados.",
    price: "A partir de R$ 1.541,58/mês ou R$ 18.499*",
    imageSrc:
      "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
  },
];

export default function Home() {
  return (
    <section>
      <header>
        <h1>Conheça a família Macbook.</h1>
        <h5>Agora com novos modelos M3</h5>
      </header>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <Image
              src={product.imageSrc}
              width={400}
              height={200}
              alt="Macbook Air de 13 e 15 pol."
            />

            <h3>{product.name}</h3>
            <h4>{product.chipset}</h4>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <div className="action-buttons">
              <button className="about-button">Saiba Mais</button>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
