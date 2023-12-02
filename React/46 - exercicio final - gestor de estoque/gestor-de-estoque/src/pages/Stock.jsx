import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// posso utilizar um ref para pegar os inputs e mudar o estilo deles

export default function Stock() {
  const [showAllItems, setShowAllItems] = useState(true);
  const [showNewItemForm, setShowNewItemForm] = useState(false);

  return (
    <>
      <h1>Stock Items</h1>

      <input
        type="radio"
        name="items-display"
        id="all-items"
        value={showAllItems}
        onChange={() => {
          setShowAllItems(true);
          setShowNewItemForm(false);
        }}
        style={{ display: "none" }}
        checked={showAllItems}
      />
      <label htmlFor="all-items" style={{ marginRight: "2rem" }}>
        Todos os itens
      </label>

      <input
        type="radio"
        name="items-display"
        id="new-item-form"
        value={showNewItemForm}
        onChange={() => {
          setShowNewItemForm(true);
          setShowAllItems(false);
        }}
        style={{ display: "none" }}
      />
      <label htmlFor="new-item-form">Novo item</label>

      <hr />

      {showAllItems ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Notebook</td>
              <td>100</td>
              <td>Eletrônicos</td>
              <td>
                {/* passar o id para o parametro na hora de gerar dinamicamente a tabela */}
                <Link to="/items/1"><button>Ver</button></Link>
                <Link to="/items/update/1"><button>Editar</button></Link>
                <button>Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : showNewItemForm ? (
        <h1>Novo Item</h1>
      ) : (
        <Outlet />
      )}
    </>
  );
}
