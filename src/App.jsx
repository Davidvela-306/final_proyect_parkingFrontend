import Header from "./components/Header";
import LeftSideMenu from "./components/LeftSideMenu";
import SideBar from "./Layouts/SideBar";

// In App.jsx (located in the pages folder)
function App() {
  return (
    <>
      <SideBar header={<Header />} leftSide={<LeftSideMenu />}>
        <h1 className="title">Contenido Principal</h1>
        <p>Contenido del body - App parking</p>
      </SideBar>
    </>
  );
}

export default App;
