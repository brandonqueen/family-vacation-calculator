import React from "react";
import "./InputModal.css";

function InputModal({ onModalToggle, selectedFamily }) {
	return (
		<>
			<div className="modalFullscreen" onClick={onModalToggle}></div>
			<div className="modal">
				<button className="modalButton" onClick={onModalToggle}>X</button>
				<text className="modalTitle">{selectedFamily.name}'s Expenses</text>

			</div>
		</>
	);
}

export default InputModal;
