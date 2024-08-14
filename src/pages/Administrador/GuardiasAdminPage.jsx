import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchGet } from "../../helper/request_functions";
import { baseAdmin } from "../../helper/instances_routes";
const Guardias = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState([]);
  console.log(token);

  useEffect(() => {
    getUsers();
  }, [token]);
  const getUsers = async () => {
    try {
      const response = await fetchGet(baseAdmin, "/listar-guardias", token);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(
    "%csrcpagesAdministradorGuardiasAdminPage.jsx:21 users",
    "color: white; background-color: #26bfa5;",
    users
  );

  return (
    <>
      <h1 className="text-4xl font-bold mb-10 text-azul-10">Guardias</h1>
      <div className=" h-[90vh]">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead className="bg-azul-20 text-white border-solid border-t-2 border-gray-300 ">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Nombre</th>
              <th className="px-4 py-2 text-left font-semibold">Apellido</th>
              <th className="px-4 py-2 text-left font-semibold">Cedula</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                className="hover:bg-gray-100 border-solid border-t-2 border-gray-300"
                key={user._id}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.nombre}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.apellido}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.cedula}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.telefono}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Guardias;
