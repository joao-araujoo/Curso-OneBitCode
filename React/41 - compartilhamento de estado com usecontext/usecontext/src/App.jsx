import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: 'John',
    email: "john@example.com",
    age: 30
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <Header />
        <h1>Usando Contexto</h1>
        <Container>
          Este é o nosso app com contexto
        </Container>
      </UserContext.Provider>
      <div>
        {/* não há acesso ao contexto */}
      </div>
    </>
  )
}

// Passos para criar um contexto
// - Criar um arquivo js com o objeto do contexto utilizando a função "createContext()"
// - Utilizar o Provider como elemento pai dos elementos nos quais queremos utilizar os valores do mesmo
// - Utilizar o hook "useContext(contexto)" para recuperar os dados do contexto