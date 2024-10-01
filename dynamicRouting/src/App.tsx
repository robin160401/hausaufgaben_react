import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CarPage from "./Pages/CarPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/:car",
      element: <CarPage />
    },
    {
      path: "*",
      element: <p>Ooopsies</p>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
