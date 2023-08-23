import React, { useState } from "react";
import FamilyHeads from "../FamilyHeads/FamilyHeads";
import Patriarchs from "../Patriarchs/Patriarchs";
import InputModal from "../InputModal/InputModal";
import "./App.css";

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
