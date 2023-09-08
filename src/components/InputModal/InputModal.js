import React from "react";
import "./InputModal.css";
import { useSelector, useDispatch } from "react-redux";
import {
	addEaters,
	addExpense,
	removeExpense,
	clearExpenses,
} from "../../features/personInput/personInputSlice";

function InputModal({ onModalClick, selectedFamily }) {
	const eaters = useSelector((state) =>
		state.personInput.map((obj) => {
			if (obj.name === selectedFamily.name) {
				return obj.eaters;
			}
		})
	);
	const expenses = useSelector((state) => state.personInput.expenses);

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
				<text
					style={{ alignSelf: "center", textAlign: "center", padding: "10px" }}>
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
						<div style={{ padding: "24px" }}></div>
						<text className="expenseAreaHeader">
							How Many "Eaters" in Your Family?
						</text>
						<div className="expenseInputSubsection">
							<text className="expensesText">Eaters: {eaters}</text>
							<input className="input"></input>
							<button className="button">Update Eaters</button>
						</div>
					</div>
					<div className="lineDivider"></div>
					<div className="loggedExpensesSection">
						<div>
							<text className="expenseAreaHeader">Expenses Logged</text>
						</div>
						<div className="loggedExpensesSubsection">
							<div className="loggedExpense">
								<text className="expensesText">Costco:</text>
								<text className="expensesText">$152.12</text>
								<button className="button">Remove Expense</button>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<button className="button">Clear All</button>
							<text
								style={{
									alignSelf: "center",
									fontWeight: "900",
									fontSize: 20,
								}}>
								Total: $300
							</text>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputModal;
