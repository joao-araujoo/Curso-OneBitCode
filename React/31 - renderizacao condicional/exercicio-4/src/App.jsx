import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8
  function generatePassword() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%_'()*+-./;\\";

    let newPassword = "";
    for (let i = 1; i <= passwordSize; i++) {
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
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input
            passwordSize={customSize}
            setPasswordSize={setCustomSize}
          />
        </div>
      )}
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
