import './App.css';
import Register from "./Pages/Register";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

