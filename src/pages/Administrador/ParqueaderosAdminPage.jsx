import Espacios from "../../components/ui/Parqueadero";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet } from "../../helper/request_functions";
import { baseParqueaderos } from "../../helper/instances_routes";
const ParqueaderosAdminPage = () => {
  const { token } = useAuth();
  const [parkingDescription, setparkingDescription] = useState([]);
  console.log(token);

  useEffect(() => {
    getParking();
  }, [token]);

  const getParking = async () => {
    try {
      const response = await fetchGet(baseParqueaderos, "/", token);
      console.log(response.data);
      setparkingDescription(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(
    "%csrcpagesAdministradorUsuariosAdminPage.jsx:21 parkingDescription",
    "color: white; background-color: #26bfa5;",
    parkingDescription
  );

  /*  */
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    descripcion: "",
    planta: "",
    bloque: "",
    tipo: "",
    estado: "",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Agregar el nuevo parqueadero a la lista
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="font-black text-4xl text-center text-gray-500">
        Parqueadero
      </h1>
      <hr className="my-4" />
      <div className="text-center mb-4">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
          onClick={toggleForm}
        >
          Registrar Parqueadero
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-200 p-4 rounded shadow mb-4">
          <h2 className="text-lg font-bold mb-2">
            Registrar Nuevo Parqueadero
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              value={form.descripcion}
              onChange={(e) =>
                setForm({ ...form, descripcion: e.target.value })
              }
              placeholder="Descripción"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={form.planta}
              onChange={(e) => setForm({ ...form, planta: e.target.value })}
              placeholder="Planta"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={form.bloque}
              onChange={(e) => setForm({ ...form, bloque: e.target.value })}
              placeholder="Bloque"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={form.tipo}
              onChange={(e) => setForm({ ...form, tipo: e.target.value })}
              placeholder="Tipo"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={form.estado}
                onChange={(e) => setForm({ ...form, estado: e.target.checked })}
                className="mr-2"
              />
              Estado: Activo
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            >
              Guardar
            </button>
          </form>
        </div>
      )}

      <p className="text-2xl text-center">Parqueadero ESFOT</p>

      {/* Mostrar la lista de parqueaderos */}
      {parkingDescription.map((parking) => (
        <>
          <div
            key={parking.id}
            className="p-10 border-solid border-2 border-sky-700 rounded-lg m-3 flex"
          >
            <p>
              <span className="font-bold">Numero: </span>
              {parking.numero}
            </p>
            <p>
              <span>Numero: </span>
              {parking.bloque}
            </p>
            <p>
              <span>Numero: </span>
              {parking.tipo}
            </p>
            <p>
              <span>Numero: </span>
              {parking.numero}
            </p>
          </div>
          <div>
            <Espacios />
            <hr className="border-solid border-2 border-azul-20 mb-9" />
          </div>
        </>
      ))}
    </div>
  );
};

export default ParqueaderosAdminPage;
