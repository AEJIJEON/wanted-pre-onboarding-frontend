import { ChakraProvider } from "@chakra-ui/react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AuthGuard } from "./components/AuthGuard";
import { useAuth } from "./hooks/useAuth";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Todo } from "./pages/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Signup />
      </AuthGuard>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthGuard>
        <Signup />
      </AuthGuard>
    ),
  },
  {
    path: "/signin",
    element: (
      <AuthGuard>
        <Signin />
      </AuthGuard>
    ),
  },
  {
    path: "/todo",
    element: (
      <AuthGuard restricted>
        <Todo />
      </AuthGuard>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/signin" />,
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
