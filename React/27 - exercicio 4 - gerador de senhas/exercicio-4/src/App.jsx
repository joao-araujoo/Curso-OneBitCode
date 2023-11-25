import { useState } from "react";
import "./App.css";

function generatePassword() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%_'()*+-./;\\";

  let newPassword = "";
  for (let i = 0; i <= 12; i++) {
    newPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return newPassword;
}

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopyText("Copiado!");

    setTimeout(() => {
      setCopyText("Copiar");
    }, 2000);
  }

  return (
    <>
      <h1>Gerador de Senhas</h1>
      <button
        onClick={() => {
          setPassword(() => generatePassword());
          setCopyText("Copiar");
        }}
      >
        Gerar!
      </button>
      <button onClick={copyPassword}>{copyText}</button>
      <p>{password}</p>
    </>
  );
}

export default App;
