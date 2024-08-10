const Parqueaderos = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mb-10 text-azul-10">Parqueaderos</h1>
    <div className=" h-[90vh]">
      <div>
      <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
          >
          Registrar Parqueadero
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
          >
          Listar Disponibilidad
      </button>
      </div><br/>
      <p>Aqui se deben listar tanto activos y no activos // Borrar esto y el resto de coments</p>
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead className="bg-azul-20 text-white border-solid border-t-2 border-gray-300 ">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Numero</th>
            <th className="px-4 py-2 text-left font-semibold">Bloque</th>
            <th className="px-4 py-2 text-left font-semibold">Tipo</th>
            <th className="px-4 py-2 text-left font-semibold">
              Disponibilidad
            </th>
            <th className="px-4 py-2 text-left font-semibold">Dimensiones</th>
            <th className="px-4 py-2 text-left text-black-500 font-semibold ">
              Reservado
            </th>
            <th className="px-4 py-2 text-left text-black-500 font-semibold ">
              Estado
            </th>
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
              <td className="px-4 py-2 border-b border-gray-300">
                
              </td>
              <td className="px-4 py-2 border-b border-gray-300">
                <p>Cuando se cambia el estado no se borra el parqueadero</p>
              </td> 
              <td className="px-4 py-2 border-b border-gray-300" >
              <p>detalle, actualizar, cambiarEstado</p>
              <i class="bi bi-box-arrow-in-right"></i>
              <i class="bi bi-arrow-counterclockwise"></i>
                {true ? ( //Logica para cambiar el switch cuanso se cambia el estado
                  <i className="bi bi-toggle-off"></i>
                ) : (
              <i className="bi bi-toggle-on"></i>
                )}
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  </>
  );
};

export default Parqueaderos;
