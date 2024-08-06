import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { fetchPost } from "../helper/request_functions";
import {
  baseAdmin,
  baseGuardias,
  baseUsuarios,
} from "../helper/instances_routes";

import {
  LogoTitle,
  Mensaje,
  Input,
  Button,
  Card,
  Label,
  CustomLink,
} from "../components/ui";

const Login = () => {
  const { register, handleSubmit, watch } = useForm();
  const [mensaje, setMensaje] = useState({});
  const { signin, setRol } = useAuth();

  useEffect(() => {
    const selectedRol = watch("rol");
    setRol(selectedRol);
  }, [watch("rol")]);
  const onSubmit = async (values) => {
    try {
      const response = await signin(values);
      const { nombre } = response.data;
      setMensaje({
        respuesta: `Bienvenido ${nombre}`,
        tipo: true,
      });
    } catch (error) {
      console.error("Error:", error);
      setMensaje({
        respuesta:
          error.response?.data?.msg || "Ha ocurrido un error, intente de nuevo",
        tipo: false,
      });
      setRol(watch("rol"));
    }
  };

  return (
    <div className="flex w-full justify-items-end ">
      <div className="w-2/3 bg-celeste-20 flex flex-col items-center justify-center gap-5">
        <LogoTitle
          imgSrc="/src/assets/images/logoBuho.png"
          imgAlt="Logo"
          text="Poli Parking"
        />
        <div>
          {Object.keys(mensaje).length > 0 && (
            <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
          )}
        </div>
        <h1 className="text-4xl font-bold text-white ">Ingresar</h1>
        <div className="w-1/2">
          <Card>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full"
            >
              <Label text="Rol" />
              <select
                className={`w-full p-1 rounded-md ${
                  watch("rol") ? "text-black" : "text-slate-400"
                }`}
                {...register("rol", { required: true })}
              >
                <option value="" disabled hidden>
                  Seleccione un rol
                </option>
                <option value="Usuario">Usuario</option>
                <option value="Administrador">Administrador</option>
                <option value="Guardia">Guardia</option>
              </select>
              <br />
              <Label text="Email" />
              <Input
                type="email"
                placeholder="JuanPerez@gmail.com"
                {...register("email", { required: true })}
              />

              <Label text="Contraseña" />
              <Input
                type="password"
                placeholder="***********"
                {...register("password", { required: true })}
              />

              <Button type="submit">Ingresar</Button>

              <div className="flex flex-col gap-2 my-4">
                <span className="flex gap-3 justify-end">
                  <p>¿Aún no tiene una cuenta?</p>
                  <CustomLink
                    route="/usuarios/singup"
                    text="Registrarse como usuario"
                  />
                </span>
                <span className="flex gap-3 justify-end">
                  <p>¿Olvidó su contraseña?</p>
                  <CustomLink
                    route="/RecoverPassword"
                    text="Recuperar contraseña"
                  />
                </span>
              </div>
            </form>
          </Card>
        </div>
      </div>
      <div className="w-1/3">
        <img
          src="/src/assets/images/carretera.png"
          alt="carretera"
          className="w-full h-[100vh]"
        />
      </div>
    </div>
  );
};

export default Login;
