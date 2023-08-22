import "./App.css";
import React from "react";
import FamilyHeads from "./components/presentation/FamilyHeads/FamilyHeads";
import Patriarchs from "./components/presentation/Patriarchs/Patriarchs.js";
import Card from "./components/presentation/Card/Card";

function App() {
	return (
		<div className="page">
			<h1>Koch Family Vacation Calculator</h1>
			<Patriarchs />
			<FamilyHeads />
		</div>
	);
}

export default App;
