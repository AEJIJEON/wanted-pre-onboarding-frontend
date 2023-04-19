import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Todo } from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>react app!</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  const { initializeAuth } = useAuth();
  initializeAuth();

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
