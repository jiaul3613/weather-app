
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home'
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      { index:true,
        element:<Home/>
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
   
]);



export default function Router() {
  return (
   <RouterProvider router={router} />
  )
}


