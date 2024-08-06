import { useAuth } from "../context/AuthContext";

const Inicio = () => {
  const { user } = useAuth();
  const { nombre, apellido, telefono, _id, email, rol } = user;
  return (
    <>
      <p>nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Telefono: {telefono}</p>
      <p>Id:{_id}</p>
      <p>Email: {email}</p>
      <p>Rol: {rol}</p>

      <div className=" flex justify-center items-center h-[80vh]">
        <div className="w-1/2 inset-0 bg-transparent opacity-20 z-0">
          <img src="/src/assets/images/parking-amico.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Inicio;
