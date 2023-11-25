import useCounter from "./hooks/useCounter";
import './App.css'

// Hooks
// Funções que nos permitem utilizar recursos especiais do React

// Regra 1: Onde usar os hooks
// Somente utilizar dentro de componentes React ou hooks próprios

// Regra 2: Ordem dos hooks
// Somente utilizar no top level dos componentes e nunca dentro de blocos de código

function App() {
  const counter = useCounter();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
      </div>
    </>
  )
}

export default App
