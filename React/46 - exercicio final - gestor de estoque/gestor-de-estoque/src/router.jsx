import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";

// adicionar loaders e errorElements
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/items",
        element: <Stock />,
        children: [
          {
            path: "/items/:itemId",
            element: <Item />
            // loader: function,
            // errorElement: function
          },
          {
            path: "/items/new",
            element: <CreateItem />
            // loader: function,
            // errorElement: function
          }
        ]
      }
    ],
  },
]);

export default router;
