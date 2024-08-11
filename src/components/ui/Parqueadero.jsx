const Espacios = () => {
  return (
    <table className="w-full mt-5 table-auto shadow-lg bg-white">
      <thead className="bg-gray-800 text-slate-400">
        <tr>
          <th className="p-2">Espacios</th>
          <th className="p-2">Disponible</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 1</td>
          <td className="py-2">Sí</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 2</td>
          <td className="py-2">No</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 3</td>
          <td className="py-2">Sí</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 4</td>
          <td className="py-2">No</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 5</td>
          <td className="py-2">No</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 6</td>
          <td className="py-2">No</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 7</td>
          <td className="py-2">No</td>
        </tr>
        <tr className="border-b hover:bg-gray-300 text-center">
          <td className="py-2">Espacio 8</td>
          <td className="py-2">No</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Espacios;
