export default function App() {
  return (
    <div>
      <header>
        <img src="./image.png" alt="React Logo" width={100} />
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuário web e nativas</p>
        <button>Aprenda React</button>
        <button>Referência da API</button>
      </header>
      <hr />
      <main>
        <article>
          <h2>Crie interfaces de usuários de componentes</h2>
          <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>
        </article>
        <hr />
        <article>
          <h2>Escreva componentes com código e marcação</h2>
          <p>Componentes React são funções JavaScript. A sintáxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p>
        </article>
        <hr />
        <article>
          <h2>Próximos passos</h2>
          <ul>
            <li>Uso de dados dinâmicos no JSX</li>
            <li>Criação de novos componentes</li>
            <li>Estilização de componentes</li>
            <li>Reutilização de componentes</li>
            <li>Uso de props e children</li>
            <li>Uso de eventos do JavaScript</li>
          </ul>
        </article>
      </main>
      <hr />
      <footer>
        <i>@joao.araujoo_</i>
      </footer>
    </div>
  )
}