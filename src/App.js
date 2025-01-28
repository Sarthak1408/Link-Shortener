import './App.css';
import Register from "./Pages/Register";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Links from "./Pages/Links";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/links" element={<Links />}/>
                <Route path="/analytics" element={<Analytics />}/>
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

