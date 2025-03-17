import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/searchPokemon",
      element: <SearchBar />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
