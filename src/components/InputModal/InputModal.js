import React from "react";
import "./InputModal.css";

function InputModal({ onClick, selectedFamily }) {
	return (
		<div className="modal">
			<p style={{ fontWeight: "bold", fontSize: 25 }}>{selectedFamily.name}</p>
			<button onClick={onClick}>X</button>
		</div>
	);
}

export default InputModal;
