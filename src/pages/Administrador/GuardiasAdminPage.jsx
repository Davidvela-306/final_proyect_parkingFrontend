import "bootstrap-icons/font/bootstrap-icons.css";

const Guardias = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mb-10 text-azul-10">Guardias</h1>
    <div className=" h-[90vh]">
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead className="bg-azul-20 text-white border-solid border-t-2 border-gray-300 ">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Nombre</th>
            <th className="px-4 py-2 text-left font-semibold">Apellido</th>
            <th className="px-4 py-2 text-left font-semibold">Email</th>
            <th className="px-4 py-2 text-left font-semibold">
              Estado
            </th>
            <th className="px-4 py-2 text-left font-semibold">Telefono</th>
            <th className="px-4 py-2 text-left text-black-500 font-semibold ">
              Operaciones
            </th>

          </tr>
        </thead>
        <tbody>
            <tr
              className="hover:bg-gray-100 border-solid border-t-2 border-gray-300"
              
            >
              <td className="px-4 py-2 border-b border-gray-300">
               
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
               
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
               
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                
              </td>
              <td className="px-4 py-2 border-b border-gray-300" >
                {true ? ( //Logica para cambiar el switch cuanso se cambia el estado
                  <i className="bi bi-toggle-off"></i>
                ) : (
              <i className="bi bi-toggle-on"></i>
                )}
                <i className="bi bi-person-dash-fill"></i>
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  </>
  );
};

export default Guardias;