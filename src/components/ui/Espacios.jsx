import { useEffect, useState } from "react";
import io from "socket.io-client";

const Espacios = () => {
  const [estado1, setEstado1] = useState(null);
  const [estado2, setEstado2] = useState(null);
  const [estado3, setEstado3] = useState(null);
  const [estado4, setEstado4] = useState(null);
  const [estado5, setEstado5] = useState(null);
  const [estado6, setEstado6] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:3000"); // Ajusta la URL según tu configuración

    socket.on("serialData", (data) => {
      // Procesar cada línea de datos
      const lines = data.split("\n");
      lines.forEach((line) => {
        const [estado, valor] = line.split(":");
        switch (estado) {
          case "Estado1":
            setEstado1(valor);
            break;
          case "Estado2":
            setEstado2(valor);
            break;
          case "Estado3":
            setEstado3(valor);
            break;
          case "Estado4":
            setEstado4(valor);
            break;
          case "Estado5":
            setEstado5(valor);
            break;
          case "Estado6":
            setEstado6(valor);
            break;
          default:
            break;
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <table className="table-auto w-1/2 mx-auto mt-5 text-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border bg-gray-100">Lugar</th>
            <th className="px-4 py-2 border bg-gray-100">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 1</td>
            <td
              className={`${
                parseInt(estado1) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado1) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 2</td>
            <td
              className={`${
                parseInt(estado2) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado2) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 3</td>
            <td
              className={`${
                parseInt(estado3) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado3) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 4</td>
            <td
              className={`${
                parseInt(estado4) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado4) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 5</td>
            <td
              className={`${
                parseInt(estado5) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado5) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border text-center">Lugar 6</td>
            <td
              className={`${
                parseInt(estado6) === 1
                  ? "px-4 py-2 border text-red-600 font-bold text-center"
                  : "px-4 py-2 border text-green-600 font-bold text-center"
              }`}
            >
              {parseInt(estado6) === 1 ? "No disponible" : "Disponible"}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Espacios;
