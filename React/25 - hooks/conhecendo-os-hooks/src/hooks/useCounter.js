import { useState } from "react";

function getInitialValue() {
  console.log("Obtendo o valor inicial...")
  return 1 + 1
}

export default function useCounter() {
  // se passarmos uma função como parâmetro para o useState, ele apenas a utilizará uma única vez, porque ele entende que só deve ser executada para obter o estado inicial
  const [count, setCount] = useState(() => getInitialValue());

  const increment = () => {
    // o código abaixo não funciona como o esperado, uma vez que o React executa de forma assíncrona, então, é como se o valor "count" fosse igual na hora da execução das mesmas
    // setCount(count + 1); // 2 + 1
    // setCount(count + 1); // 2 + 1

    // quando for necessário utilizar o valor para atualizar o state, é correto fazer da maneira abaixo
    setCount((currentState) => currentState + 2);
    // o método acima força o React a utilizar o valor atual, diferente da abordagem anterior
  };

  return { count, increment };
}