import { CardPerfilU } from "../../components/Perfil/CardPerfilU";
// import FormularioPerfilU from "../../components/Perfil/FormularioPerfilU";

const PerfilUsuarios = () => {
  return (
    <>
      <div>
        <h1 className="font-black text-4xl text-gray-500">Perfil</h1>
        <hr className="my-4" />
      </div>

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png"
          alt="img-client"
          className="m-auto "
          width={120}
          height={120}
        />
      </div>

      <div className="flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap">
        {/* <div className="w-full md:w-1/2">
          <FormularioPerfilU />
        </div> */}
        <div className="w-full md:w-1/2">
          <CardPerfilU />
        </div>
      </div>
    </>
  );
};

export default PerfilUsuarios;
