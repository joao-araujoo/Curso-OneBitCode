import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal. Conteúdo dinâmico de cada rota será
          adicionado abaixo.
        </p>
        <hr />
        {/* o outlet delimita onde será adicionado o conteúdo dinâmico de cada rota dentro de um layout pré-definido */}
        <Outlet />
      </main>
      <footer>
        <hr />
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
}
