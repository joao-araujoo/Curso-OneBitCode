import StatsDisplay from "../components/StatsDisplay";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "2rem" }}>
        <StatsDisplay title="Diversidade de itens" quantity={2} />
        <StatsDisplay title="Inventário total" quantity={40} />
        <StatsDisplay title="Itens recentes" quantity={2} />
        <StatsDisplay title="Itens acabando" quantity={1} />
      </div>
      
      <div style={{ width: "100%", display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        <table>
          <thead>
            <tr>
              <th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* popular o tbody com esses elementos abaixo (posso criar um componente para eles) */}
            <tr>
              <td>7 Wonders</td>
              <td><button>Ver</button></td>
            </tr>
            <tr>
              <td>O Senhor dos Anéis</td>
              <td><button>Ver</button></td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Itens Acabando</th>
              <th>Qtd.</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* popular o tbody com esses elementos abaixo (posso criar um componente para eles) */}
            <tr>
              <td>7 Wonders</td>
              <td>8</td>
              <td><button>Ver</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}