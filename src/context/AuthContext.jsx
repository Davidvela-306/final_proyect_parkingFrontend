import { createContext, useState, useContext, useEffect } from "react";
import { fetchPost } from "../helper/request_functions";
import {
  baseUsuarios,
  baseAdmin,
  baseGuardias,
} from "../helper/instances_routes";
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [rol, setRol] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const setUserData = (userData, token) => {
    if (userData && token) {
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("token", token);
      setUser(userData);
      setIsAuth(true);
      setRol(userData.rol || null);
    } else {
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      setUser(null);
      setIsAuth(false);
      setRol(null);
    }
  };

  const signin = async (data) => {
    try {
      let response;
      console.log("rol:", rol);
      if (rol === "Usuario") {
        response = await fetchPost(baseUsuarios, "/login", data);
      } else if (rol === "Administrador") {
        response = await fetchPost(baseAdmin, "/login", data);
      } else if (rol === "Guardia") {
        response = await fetchPost(baseGuardias, "/login", data);
        
      } else {
        throw new Error("Rol no valido");
      }

      const { nombre, apellido, telefono, token, _id, email } = response.data;
      const userData = { nombre, apellido, telefono, _id, email, rol };
      setUserData(userData, token);
      setToken(token);

      return response;
    } catch (error) {
      setUserData(null, null);
      setToken(null);
      throw error;
    }
  };
  const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem("userData");
    const token = localStorage.getItem("token");
    if (userData && token) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsAuth(true);
      setRol(parsedUser.rol || null);
    } else {
      setUser(null);
      setIsAuth(false);
      setRol("Usuario");
    }
    setLoading(false);
  };

  const signup = async (data) => {
    try {
      const response = await fetchPost(baseUsuarios, "/registrar", data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const signout = async () => {};

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        rol,
        setRol,
        isAuth,
        signup,
        signin,
        signout,
        loading,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
