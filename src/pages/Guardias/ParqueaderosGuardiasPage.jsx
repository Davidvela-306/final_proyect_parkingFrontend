const ParqueaderosGuardiasPage = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mb-10 text-azul-10">Parqueaderos</h1>
    <div className=" h-[90vh]">
      <div>
      
      <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
          >
          Enviar a usuario
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      </div><br/>
      <p>Aqui se deben listar parqueaderos activos // Borrar esto y el resto de coments</p>
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
              
            </tr>
          
        </tbody>
      </table>
    </div>
  </>
  );
};

export default ParqueaderosGuardiasPage;