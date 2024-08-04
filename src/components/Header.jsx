import LogoTitle from "./ui/LogoTitle";

const Header = () => {
  return (
    <>
      <LogoTitle
        imgSrc="\src\assets\images\logoBuho.png"
        imgAlt="Logo"
        text="Poli Parking"
      />
      <div>
        <img
          className="w-16"
          src="\src\assets\images\car.png"
          alt="Logo Poli parking"
        />
      </div>
    </>
  );
};

export default Header;
