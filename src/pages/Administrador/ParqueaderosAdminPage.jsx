import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet, fetchPatch } from "../../helper/request_functions";
import { baseParqueaderos } from "../../helper/instances_routes";
import Espacios from "../../components/ui/Espacios";

const ParqueaderoAdminPage = () => {
  const { token } = useAuth();
  const [parkingPlaces, setParkingPlaces] = useState([]);
  const [selectedParkingPlace, setSelectedParkingPlace] = useState(null);

  useEffect(() => {
    getParking();
  }, [token]);

  const getParking = async () => {
    try {
      const response = await fetchGet(baseParqueaderos, "/", token);
      setParkingPlaces(response.data);
    } catch (error) {
      console.error("Error fetching parking places:", error);
    }
  };

  const patchUser = async (id, nombre, estado) => {
    try {
      if (confirm(`¿Deseas cambiar el estado del parqueadero ${nombre}?`)) {
        const response = await fetchPatch(
          baseParqueaderos,
          `/${id}`,
          { estado: !estado },
          token
        );
        console.log("response", response);

        // Actualiza la lista de parqueaderos después de la actualización
        setParkingPlaces((prevPlaces) =>
          prevPlaces.map((place) =>
            place._id === id ? { ...place, estado: !estado } : place
          )
        );
      }
    } catch (error) {
      console.error("Error updating parking place:", error);
    }
  };

  const handleShowEspacios = (parkingPlace) => {
    setSelectedParkingPlace(parkingPlace);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-10 text-azul-10">Parqueaderos</h1>
      <div className="h-[90vh]">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-azul-20 text-white border-solid border-t-2 border-gray-300">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold">Descripción</th>
              <th className="px-4 py-2 text-left font-semibold">Planta</th>
              <th className="px-4 py-2 text-left font-semibold">Bloque</th>
              <th className="px-4 py-2 text-left font-semibold">Tipo</th>
              <th className="px-4 py-2 text-left font-semibold">Estado</th>
              <th className="px-4 py-2 text-left font-semibold">
                Cambiar Estado
              </th>
              <th className="px-4 py-2 text-left font-semibold">
                Ver espacios
              </th>
            </tr>
          </thead>
          <tbody>
            {parkingPlaces.map((parkingPlace) => (
              <tr
                className="hover:bg-gray-100 border-solid border-t-2 border-gray-300"
                key={parkingPlace._id}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.nombre}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.description}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.planta}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.bloque}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.tipo}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {parkingPlace.estado ? "Disponible" : "No disponible"}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button
                    type="button"
                    onClick={() =>
                      patchUser(
                        parkingPlace._id,
                        parkingPlace.nombre,
                        parkingPlace.estado
                      )
                    }
                    className="bg-green-700 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                  >
                    Cambiar estado
                  </button>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button
                    type="button"
                    onClick={() => handleShowEspacios(parkingPlace)}
                    className="bg-green-700 hover:bg-green-500 text-white font-bold py-1 px-3 rounded"
                  >
                    Espacios disponibles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mostrar Espacios solo si se ha seleccionado un parqueadero */}
        {selectedParkingPlace && (
          <div className="w-full  flex justify-center">
            <Espacios parkingPlace={selectedParkingPlace} />
          </div>
        )}
      </div>
    </>
  );
};

export default ParqueaderoAdminPage;
