import { React, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import Registerstudent from "./Registerstudent";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Students />}></Route>
        <Route path="/createuser" element={<Registerstudent />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
