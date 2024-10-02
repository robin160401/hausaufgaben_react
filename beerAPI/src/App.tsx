
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const query = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/allbeers",
      element: <AllBeersPage />
    },
    {
      path: "/:name",
      element: <BeerDetailsPage />
    }
  ])

  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </>
  )
}

export default App
