import React, { useState } from "react";
import FamilyHeads from "../components/FamilyHeads/FamilyHeads";
import Patriarchs from "../components/Patriarchs/Patriarchs";
import InputModal from "../features/inputModal/InputModal";
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
		</div>
	);
}

export default App;
