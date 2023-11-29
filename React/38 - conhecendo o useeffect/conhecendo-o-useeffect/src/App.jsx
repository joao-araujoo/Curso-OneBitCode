import { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  // possui 2 parâmetros, o callback que irá ser executado sempre que o efeito colateral for causado
  // e o array de valores que serão dependências para ativar o efeito colateral
  useEffect(() => {
    alert('Chamando a api...')
    
    // função de limpeza
    return () => {
      alert('Chamada cancelada!')
    };
  }, [counter]);
  // sempre executa uma vez na inicialização
  // caso não tenha o array de dependências, é executado após qualquer mudança de estado

  return (
    <button onClick={() => setCounter((count) => count + 1)}>
      Contador: {counter}
    </button>
  );
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Conhecendo o useEffect</h1>
      <div>
        <input
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow((state) => !state)}
        />
        <label htmlFor="show">Exibir</label>
      </div>
      {show ? <Counter /> : null}
    </>
  );
}
