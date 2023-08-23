import React from "react";
import "./InputModal.css";

function InputModal({ onClick, selectedFamily }) {
	return (
		<>
			<div className="modalFullscreen" onClick={onClick}></div>
			<div className="modal">
				<button className="modalButton" onClick={onClick}>X</button>
				<text className="modalTitle">{selectedFamily.name}'s Expenses</text>

			</div>
		</>
	);
}

export default InputModal;
