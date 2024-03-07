import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { MovieProvider } from "./context/movie-context";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
