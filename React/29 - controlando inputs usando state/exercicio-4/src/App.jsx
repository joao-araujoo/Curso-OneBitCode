import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);

  function generatePassword() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%_'()*+-./;\\";

    let newPassword = "";
    for (let i = 0; i <= passwordSize; i++) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return newPassword;
  }

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
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id="passwordSize"
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button
        onClick={() => {
          setPassword(() => generatePassword());
          setCopyText("Copiar");
        }}
      >
        Gerar senha de {passwordSize} dígitos!
      </button>
      <button onClick={copyPassword}>{copyText}</button>
      <p>{password}</p>
    </>
  );
}

export default App;
