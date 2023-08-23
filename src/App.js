import "./App.css";
import React, { useState } from "react";
import FamilyHeads from "./components/presentation/FamilyHeads/FamilyHeads";
import Patriarchs from "./components/presentation/Patriarchs/Patriarchs.js";
import InputModal from "./components/presentation/InputModal/InputModal";

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function modalToggle(event) {
		setModalIsOpen(() => !modalIsOpen);
	}

	return (
		<div className="page">
			{modalIsOpen && <InputModal />}
			<h1>Koch Family Vacation Calculator</h1>
			<Patriarchs />
			<FamilyHeads onClick={modalToggle} />
		</div>
	);
}

export default App;
