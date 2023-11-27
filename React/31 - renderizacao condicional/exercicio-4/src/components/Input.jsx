/* eslint-disable react/prop-types */
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