function sum(a, b){
  return a + b
}

export default function App() {
  const tech = 'React'
  const status = true

  return (
    <div>
      <h1>{tech} is Awesome!</h1>
      <h2>It&apos;s easy, like 1 + 1 is {sum(1, 1)}</h2>
      <h2>Current status: {status ? 'on' : 'of'}</h2>
    </div> 
  )
}