import "./App.css";
import React from "react";
import FamilyHead from "./components/presentation/FamilyHead/FamilyHead";
import Patriarchs from "./components/presentation/Patriarchs/Patriarchs.js";
import Card from "./components/presentation/Card/Card";

function App() {
	
  
  return (
    <div className="page">
      <h1>Koch Family Vacation Calculator 🧮</h1>
      <Card>
        <Patriarchs />
      </Card>
    </div>
  );
}

export default App;
