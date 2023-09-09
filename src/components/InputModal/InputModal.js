import React, { useState } from "react";
import "./InputModal.css";
import { useSelector, useDispatch } from "react-redux";
import {
	updateEaters,
	addExpense,
	removeExpense,
	clearExpenses,
} from "../../features/personInput/personInputSlice";

function InputModal({ onModalClick, selectedFamily }) {
	//Local state
	const [eatersInput, setEatersInput] = useState(null);
	const [expenseInput, setExpenseInput] = useState("");
	const [amountInput, setAmountInput] = useState(null);

	//Redux state getters/setters
	const eaters = useSelector((state) => {
		const personIndex = state.personInput.findIndex(
			(obj) => obj.name === selectedFamily.name
		);
		return state.personInput[personIndex].eaters;
	});

	const expenses = useSelector((state) => {
		const personIndex = state.personInput.findIndex(
			(obj) => obj.name === selectedFamily.name
		);
		return state.personInput[personIndex].expenses;
	});

	const dispatch = useDispatch();

	//handle click functions
	const handleEatersClick = () => {
		const eatersValue = Math.round(Number(eatersInput) * 2) / 2;
		if (Number.isNaN(eatersValue)) {
			alert("Please type a number.");
			return;
		} else if (eatersValue < 1 || eatersValue > 15) {
			alert("Please type a positive number between 1-15");
		} else {
			dispatch(
				updateEaters({ name: selectedFamily.name, eaters: eatersValue })
			);
		}
		setEatersInput(null);
	};

	const handleExpenseInputClick = () => {
		const expenseValue = String(expenseInput);
		const amountValue = Math.round(Number(amountInput) * 10) / 10;
		if (!expenseInput || !amountInput) {
			alert("Please input an expense and an amount.");
		} else if (Number.isNaN(amountValue)) {
			alert("Please make sure the amount is a number!");
		} else if (expenseValue < 0) {
			alert("Please input a positive number");
		} else {
			dispatch(
				addExpense({
					name: selectedFamily.name,
					expense: {
						id: Date.now(),
						expenseName: expenseValue,
						amount: amountValue,
					},
				})
			);
		}
	};

	const handleExpenseRemoveClick = () => {
		alert("you clicked to remove expense!");
	};

	const handleExpenseClearClick = () => {
		dispatch(clearExpenses({ name: selectedFamily.name }));
	};

	//Function to render the list of exepenses
	const ToRenderIfTrue = ({ expenseName, expenseAmount }) => {
		return (
			<li>
				<text className="expensesText">{expenseName}:</text>
				<text className="expensesText">${expenseAmount}</text>
				<button className="button" onClick={handleExpenseRemoveClick}>
					Remove Expense
				</button>
			</li>
		);
	};

	/* <text className="expensesText">No expenses to show here yet! 👀</text> */

	const RenderExpenses = () => {
		return (
			<div className="loggedExpense">
				<ul>
					{expenses[0] ? (
						expenses.map((obj) => (
							<ToRenderIfTrue
								expenseName={obj.expenseName}
								expenseAmount={obj.amount}
							/>
						))
					) : (
						<text className="expensesText">
							No expenses to show here yet! 👀
						</text>
					)}
				</ul>
			</div>
		);
	};

	//JSX for UI
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
					style={{
						alignSelf: "center",
						textAlign: "center",
						padding: "8px",
					}}>
					Hi, {selectedFamily.name}! Please input your expenses below. 🙏🏻
				</text>
				<div className="modalExpensesSection">
					<div className="inputSection" name="form">
						<text className="expenseAreaHeader">Input Expenses</text>
						<div className="expenseInputSubsection">
							<text className="expensesText">Expense/Place of Purchase:</text>
							<input
								className="input"
								type="text"
								placeholder="category or place of purchase"
								value={expenseInput}
								onChange={(e) => setExpenseInput(e.target.value)}></input>
							<text className="expensesText">Amount Spent:</text>
							<input
								className="input"
								type="text"
								placeholder="input amount spent"
								value={amountInput}
								onChange={(e) => {
									setAmountInput(e.target.value);
								}}></input>
							<button className="button" onClick={handleExpenseInputClick}>
								Add Expense
							</button>
						</div>
						<div style={{ padding: "24px" }}></div>
						<text className="expenseAreaHeader">
							How Many "Eaters" in Your Family?
						</text>
						<div className="expenseInputSubsection">
							<text className="expensesText">Eaters: {eaters}</text>
							<input
								className="input"
								type="text"
								placeholder="update number of eaters"
								value={eatersInput}
								onChange={(e) => {
									setEatersInput(e.target.value);
								}}
							/>
							<button className="button" onClick={handleEatersClick}>
								Update Eaters
							</button>
						</div>
					</div>
					<div className="lineDivider"></div>
					<div className="loggedExpensesSection">
						<div>
							<text className="expenseAreaHeader">Expenses Logged</text>
						</div>
						<div className="loggedExpensesSubsection">
							<RenderExpenses />
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
							<button className="button" onClick={handleExpenseClearClick}>
								Clear All
							</button>
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
