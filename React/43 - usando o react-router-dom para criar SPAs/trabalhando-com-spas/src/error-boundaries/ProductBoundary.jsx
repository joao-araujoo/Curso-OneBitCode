import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Oops... Esse produto não foi encontrado =(</h2>;
      case 401:
        return <h2>Você não tem permissão para acessar esse recurso.</h2>;
      case 400:
        return <h2>Ocorreu um erro inesperado na requisição.</h2>;
      case 500:
        return <h2>Ocorreu um erro inesperado no servidor.</h2>;        
    }
  }

  return <h2>Oops... Algo deu errado =(</h2>;
}
