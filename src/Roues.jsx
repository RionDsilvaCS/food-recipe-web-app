import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Recipes from './components/user/recipes'
import Login from './components/user/login'
import Register from './components/user/register'
import Dashboard from './components/admin/dashboard'

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <Link to="/recipes"><button>Recipes</button></Link>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ];


  const routesForNotAuthenticatedOnly = [
    {
        path: "/",
        element: <Link to="/login"><button>Login</button></Link>,
      },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
      },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;