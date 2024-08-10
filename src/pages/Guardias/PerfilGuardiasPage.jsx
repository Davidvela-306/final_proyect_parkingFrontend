import {
  LogoTitle,
  Mensaje,
  Input,
  Button,
  Card,
  Label,
  CustomLink,
  AlertText,
} from "../../components/ui";


const PerfilGuardiasPage = () => {
  return (    
      <>
      <p>PerfilGuardiasPage</p>
      <p> Actualizar y Mostrar perfil </p>
      
      <div className="flex w-full justify-items-end ">
        <div className="w-2/3 h-[100vh] bg-celeste-20 flex flex-col items-center justify-center gap-3 rounded-md">
          <LogoTitle
            imgSrc="/src/assets/images/logoBuho.png"
            imgAlt="Logo"
            text="Poli Parking"
          />
          <div>
            
          </div>
          <h1 className="text-4xl font-bold text-azul-10 ">Perfil</h1>
          <div className="w-1/2">
            <Card>
              <form
                
                className="flex flex-col w-full"
              >
                <div className="w-full flex justify-between">
                  <Label text="Nombre" />
                  
                </div>
                <Input
                  type="text"
                  
                />
                <div className="w-full flex justify-between">
                  <Label text="Apellido" />
                  
                </div>
                <Input
                  type="text"
                />
                <div className="w-full flex justify-between">
                  <Label text="Email" />
                </div>
                <Input
                  type="email"
                />
              
                <div className="w-full flex justify-between">
                  <Label text="Cedula" />
                  
                </div>
                <Input
                  type="number"
                />
                <div className="w-full flex justify-between">
                  <Label text="Telefono" />
                  
                </div>
                <Input
                  type="text"
                  
                />
                <Button type="submit">Actualizar</Button>
                
              </form>
            </Card>
          </div>
        </div>
        
      </div>
    </>


  );
};

export default PerfilGuardiasPage;