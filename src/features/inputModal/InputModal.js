import React from "react";
import "./InputModal.css";

function InputModal({ onModalClick, selectedFamily }) {
	return (
		<>
			<div className="modalFullscreen" onClick={onModalClick}></div>
			<div className="modal">
				<button className="modalButton" onClick={onModalClick}>
					X
				</button>
				<div className="headerBar">
					<img
						className="avatarSmall"
						src={selectedFamily.imgSrc}
						alt={selectedFamily.name}
					/>
					<text className="modalTitle">{selectedFamily.name}'s Expenses</text>
				</div>
				<text style={{ alignSelf: "center", padding: "10px" }}>
					Hi, {selectedFamily.name}! Please input your expenses below. 🙏🏻
				</text>
				<div className="modalExpensesSection">
					<div className="inputSection" name="form">
						<text className="expenseAreaHeader">Input Expenses</text>
						<div className="expenseInputSubsection">
							<text className="expensesText">Expense/Place of Purchase:</text>
							<input className="input"></input>
							<text className="expensesText">Amount Spent:</text>
							<input className="input"></input>
							<button className="button">Add Expense</button>
						</div>
						<div style={{padding: "24px"}}></div>
						<text className="expenseAreaHeader">
							How Many "Eaters" in Your Family?
						</text>
						<div className="expenseInputSubsection">
							<text className="expensesText">Eaters: 3</text>
							<input className="input"></input>
							<button className="button">Update Eaters</button>
						</div>
					</div>
					<div className="loggedExpensesSection">
						<text className="expenseAreaHeader">Expenses Logged</text>
						<div className="loggedExpensesSubsection">
							<div className="loggedExpense">
								<text className="expensesText">Costco:</text>
								<text className="expensesText">$152.12</text>
								<button className="button">Remove Expense</button>
							</div>
							<div className="loggedExpense">
								<text className="expensesText">Costco:</text>
								<text className="expensesText">$152.12</text>
								<button className="button">Remove Expense</button>
							</div>
							<div className="loggedExpense">
								<text className="expensesText">Costco:</text>
								<text className="expensesText">$152.12</text>
								<button className="button">Remove Expense</button>
							</div>
							<div className="loggedExpense">
								<text className="expensesText">Costco:</text>
								<text className="expensesText">$152.12</text>
								<button className="button">Remove Expense</button>
							</div>
							<button className="button">Clear All</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputModal;
