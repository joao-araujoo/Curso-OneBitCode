import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Header() {
  const user = useContext(UserContext)

  return (
    <header>
      <h3>Bem Vindo, {user.name}</h3>
      <hr />
    </header>
  )
}