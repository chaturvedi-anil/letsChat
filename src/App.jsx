import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <Sidebar />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
