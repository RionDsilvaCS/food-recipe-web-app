import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "auth-token " + token;
      localStorage.setItem('token',token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;