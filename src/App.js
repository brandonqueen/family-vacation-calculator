import "./App.css";
import React from "react";
import FamilyHeads from "./components/presentation/FamilyHeads/FamilyHeads";
import Patriarchs from "./components/presentation/Patriarchs/Patriarchs.js";
import InputModal from "./components/presentation/InputModal/InputModal";

function App() {
	return (
		<div className="page">
			{/*<InputModal />*/}
			<h1>Koch Family Vacation Calculator</h1>
			<Patriarchs />
			<FamilyHeads />
		</div>
	);
}

export default App;
