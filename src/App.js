import "./App.css";
import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

const url = "https://restcountries.com/v3.1/all";

function App() {
  return (
    <div className="">
      <Header />
      <Filter />
    
    </div>
  );
}

export default App;
