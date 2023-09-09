import React, { useState } from "react";
import FamilyHeads from "../components/FamilyHeads/FamilyHeads";
import Patriarchs from "../components/Patriarchs/Patriarchs";
import InputModal from "../components/InputModal/InputModal";
import Results from "../components/Results/Results";
import "./App.css";

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedFamily, setSelectedFamily] = useState(null);

	const modalToggle = (person) => {
		setModalIsOpen(() => !modalIsOpen);
		setSelectedFamily(person);
	};

	return (
		<div className="page">
			{modalIsOpen && (
				<InputModal
					selectedFamily={selectedFamily}
					onModalClick={modalToggle}
				/>
			)}
			<h1>Koch Family Vacation Calculator</h1>
			<Patriarchs />
			<FamilyHeads onModalClick={modalToggle} />
			<div classname="Output Area">{/* place totals component here */}</div>
			<Results />
		</div>
	);
}

export default App;
