import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rover from "./components/Rover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rover/sol/:sol/camera/:name" element={<Rover />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
