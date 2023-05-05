import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SingleFlag from "./components/SingleFlag";
import { FlagProvider } from "./Context/FlagContext";
import FlagContext from "./Context/FlagContext";
import { useContext } from "react";

function App() {
  const {theme} = useContext(FlagContext)
  return (
    <div className="App" id={theme} >
      <FlagProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SingleFlag/:name" element={<SingleFlag />} />
        </Routes>
      </FlagProvider>
    </div>
  );
}

export default App;
