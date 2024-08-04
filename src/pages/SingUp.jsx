import { useForm } from "react-hook-form";
import { useState } from "react";
import { fetchPost } from "../helper/request_functions";
import { baseUsuarios } from "../helper/instances_routes";
import {
  LogoTitle,
  Mensaje,
  Input,
  Button,
  Card,
  Label,
  CustomLink,
} from "../components/ui";

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const [mensaje, setmensaje] = useState({});

  const onSubmit = async (values) => {
    try {
      const response = await fetchPost(baseUsuarios, "/registrar", values);
      console.log(response);
      setmensaje({
        respuesta: response.data.msg,
        tipo: true,
      });
    } catch (error) {
      console.error("Error:", error);
      setmensaje({
        respuesta: error.response?.data?.msg || "Ha ocurrido un error",
        tipo: false,
      });
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
        <h1 className="text-4xl font-bold text-white ">Registrarse</h1>
        <div className="w-1/2">
          <Card>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full"
            >
              <Label text="Nombre" />
              <Input type="text" placeholder="Juan" {...register("nombre")} />
              <Label text="Apellido" />
              <Input
                type="text"
                placeholder="Perez"
                {...register("apellido")}
              />
              <Label text="Email" />
              <Input
                type="email"
                placeholder="JuanPerez@gmail.com"
                {...register("email")}
              />
              <Label text="placa del vehiculo" />
              <Input
                type="text"
                placeholder="AAC-424"
                {...register("placa")}
              />
              <Label text="Telefono" />
              <Input
                type="number"
                placeholder="123456789"
                {...register("telefono")}
              />
              <Label text="Contraseña" />
              <Input
                type="password"
                placeholder="***********"
                {...register("password")}
              />
              <Button type="submit">Registrarse</Button>
              <div className="flex flex-col gap-2 my-4">
                <span className="flex gap-3 justify-end">
                  <p>¿Ya tiene una cuenta?</p>
                  <CustomLink route="/login" text="Ingresar" />
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

export default SingUp;
