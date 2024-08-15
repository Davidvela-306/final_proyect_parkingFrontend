import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet, fetchPatch } from "../../helper/request_functions";
import { baseGuardias } from "../../helper/instances_routes";
import Espacios from "../../components/ui/Espacios";

const ParqueaderoGuardiasPage = () => {
  const { token } = useAuth();
  const [parkingPlaces, setParkingPlaces] = useState([]);
  const [selectedParkingPlace, setSelectedParkingPlace] = useState(null);

  useEffect(() => {
    getParking();
  }, [token]);

  const getParking = async () => {
    try {
      const response = await fetchGet(
        baseGuardias,
        "/parqueaderos-disponibles",
        token
      );
      setParkingPlaces(response.data);
    } catch (error) {
      console.error("Error fetching parking places:", error);
    }
  };

  const handleShowEspacios = (parkingPlace) => {
    if (selectedParkingPlace && selectedParkingPlace._id === parkingPlace._id) {
      setSelectedParkingPlace(null);
    } else {
      setSelectedParkingPlace(parkingPlace);
    }
  };

  const handleAllOccupied = async (allOccupied) => {
    if (selectedParkingPlace) {
      // Actualiza el estado del parqueadero según el estado de los espacios
      const nuevoEstado = !allOccupied;
      try {
        const objEstado = { estado: nuevoEstado };
        const response = await fetchPatch(
          baseGuardias,
          `/${selectedParkingPlace._id}`,
          objEstado,
          token
        );
        if (response.status === 200) {
          setParkingPlaces((prevPlaces) =>
            prevPlaces.map((place) =>
              place._id === selectedParkingPlace._id
                ? { ...place, estado: nuevoEstado }
                : place
            )
          );
        }
      } catch (error) {
        console.error("Error updating parking place status:", error);
      }
    }
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
          <div className="w-full flex justify-center">
            <Espacios onAllOccupied={handleAllOccupied} />
          </div>
        )}
      </div>
    </>
  );
};

export default ParqueaderoGuardiasPage;
