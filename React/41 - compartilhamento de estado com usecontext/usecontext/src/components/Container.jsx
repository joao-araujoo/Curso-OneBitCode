import UserInfo from "./UserInfo"

// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (
    <div>
      <p>Container do APP</p>
      <UserInfo />
      {children}
    </div>
  )
}