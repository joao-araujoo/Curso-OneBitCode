// utilizando essa biblioteca, omitimos o erro gerado pelo eslint na hora de utilizar as props
import PropTypes from "propTypes";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func
}

// se desejamos compartilhar estados entre componentes, devemos sempre deixar o state no componente pai e utilizá-lo por meio das props
export default function Input(props) {
  return (
    <input
          type="number"
          id="passwordSize"
          value={props.passwordSize}
          onChange={(ev) => props.setPasswordSize(+ev.target.value)}
    />
  )
}