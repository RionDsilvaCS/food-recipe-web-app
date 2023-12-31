import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import {ProtectedAdminRoute} from "./ProtectedAdminRoute"
import Recipes from './components/user/recipes'
import Login from './components/user/login'
import Register from './components/user/register'
import Dashboard from './components/admin/dashboard'
import Click from './components/ClickHere'
const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <Click />,
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
      ],
    },
  ];

  const routesForAuthenticatedAdminOnly = [
    {
      path: "/",
      element: <ProtectedAdminRoute />, // Wrap the component in ProtectedRoute
      children: [
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
    ...routesForAuthenticatedAdminOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;