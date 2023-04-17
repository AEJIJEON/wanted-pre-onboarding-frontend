import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>react app!</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
