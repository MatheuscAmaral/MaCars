import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { Register } from "./pages/register";
import { Details } from "./pages/details";
import { Dashboard } from "./pages/dashboard";
import { NotFound } from "./pages/notfound";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/detalhes",
        element: <Details/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }, 
  {
    path: "/login",
    element: <Auth/>
  },
  {
    path: "/cadastro",
    element: <Register/>
  }
])


export default router;
