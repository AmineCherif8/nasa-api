import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rover from "./components/Rover/Rover";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        variant="outlined"<Route path="/" element={<SearchBar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
