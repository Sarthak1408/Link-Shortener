import './App.css';
import Register from "./Pages/Register";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

