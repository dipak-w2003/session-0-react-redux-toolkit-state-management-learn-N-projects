import { RouterProvider } from "react-router-dom";
import { router } from "./App.Pages";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
