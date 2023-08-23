import React, { useState } from "react";
import FamilyHeads from "../FamilyHeads/FamilyHeads";
import Patriarchs from "../Patriarchs/Patriarchs";
import InputModal from "../InputModal/InputModal";
import "./App.css";

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedFamily, setSelectedFamily] = useState(null);

	const modalToggle = (person) => {
		setModalIsOpen(() => !modalIsOpen);
		setSelectedFamily(person);
	}

	return (
		<div className="page">
			{modalIsOpen && (
				<InputModal selectedFamily={selectedFamily} onClick={modalToggle} />
			)}
			<h1>Koch Family Vacation Calculator</h1>
			<Patriarchs />
			<FamilyHeads onClick={(person) => modalToggle(person)} />
		</div>
	);
}

export default App;
