import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
