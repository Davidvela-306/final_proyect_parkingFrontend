import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import { AdminLayout, GuardiaLayout, UsuarioLayout } from "./Layouts/SideBar";

import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Inicio from "./pages/Inicio";
("./pages/Inicio");
import UsuariosAdminPage from "./pages/Administrador/UsuariosAdminPage";
import GuardiasAdminPage from "./pages/Administrador/GuardiasAdminPage";
import ParqueaderosAdminPage from "./pages/Administrador/ParqueaderosAdminPage";
import PerfilGuardiasPage from "./pages/Guardias/PerfilGuardiasPage";
import ParqueaderosGuardiasPage from "./pages/Guardias/ParqueaderosGuardiasPage";
import PerfilUsuariosPage from "./pages/Usuarios/PerfilUsuariosPage";

import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  const { isAuth } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios/singup" element={<SingUp />} />

        {/* Admin */}
        <Route
          path="/administrador"
          element={
            <AdminLayout>
              <Inicio />
            </AdminLayout>
          }
        />
        <Route
          path="/administrador/usuarios"
          element={
            <AdminLayout>
              <UsuariosAdminPage />
            </AdminLayout>
          }
        />
        <Route
          path="/administrador/guardias"
          element={
            <AdminLayout>
              <GuardiasAdminPage />
            </AdminLayout>
          }
        />
        <Route
          path="/administrador/parqueaderos"
          element={
            <AdminLayout>
              <ParqueaderosAdminPage />
            </AdminLayout>
          }
        />
        {/* Guardia */}

        <Route
          path="/guardias"
          element={
            <GuardiaLayout>
              <Inicio />
            </GuardiaLayout>
          }
        />
        <Route
          path="/guardias/perfil"
          element={
            <GuardiaLayout>
              <PerfilGuardiasPage />
            </GuardiaLayout>
          }
        />
        <Route
          path="/guardias/parqueaderos"
          element={
            <GuardiaLayout>
              <ParqueaderosGuardiasPage />
            </GuardiaLayout>
          }
        />

        {/* Usuario */}

        <Route
          path="/usuarios"
          element={
            <UsuarioLayout>
              <Inicio />
            </UsuarioLayout>
          }
        />

        <Route
          path="/usuarios/perfil"
          element={
            <UsuarioLayout>
              <PerfilUsuariosPage />
            </UsuarioLayout>
          }
        />

        <Route
          path="/singup"
          element={<Navigate to="/usuarios/singup" replace />}
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
