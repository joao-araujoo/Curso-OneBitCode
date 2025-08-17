import { Card, Heading } from "@radix-ui/themes";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Heading as="h1">Olá, Next.js!</Heading>
        <Card>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul>
            <li>
              <div>Via Láctea</div>
              {/* Utilizando o componente de imagem, é OBRIGATÓPRIO utilizar as propriedades de altura e largura */}
              <Image
                src="/via-lactea.jpg"
                alt="Imagem da Via Láctea"
                width={400}
                height={225}
              />
            </li>

            <li>
              <div>Andromeda</div>
              <Image
                src="https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg"
                alt="Imagem da Galáxia de Andromeda"
                width={400}
                height={225}
                objectFit="cover"
              />
            </li>
            <li>Item 3</li>
          </ul>
        </Card>
      </main>
    </div>
  );
}