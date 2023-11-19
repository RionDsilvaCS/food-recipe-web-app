import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export const ProtectedAdminRoute = () => {
    const { token } = useAuth();
    const admin = localStorage.getItem('admin')
    // Check if the user is authenticated
    if (admin && !token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/recipes" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };