import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { ThemeProvider } from "./components/ThemeToggle/ThemeContext";
import Background from "./components/ThemeToggle/Background";
import CountryInfo from "./components/CountryInfo";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
      <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/:name" element={<CountryInfo />}/>
        </Routes>
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
