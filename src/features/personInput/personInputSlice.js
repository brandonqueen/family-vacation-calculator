import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		name: "Joel",
		eaters: 5,
		expenses: [],
		total: 0,
	},
	{
		name: "Josh",
		eaters: 5,
		expenses: [],
		total: 0,
	},
	{
		name: "Katie",
		eaters: 3.5,
		expenses: [],
		total: 0,
	},
	{
		name: "Melody",
		eaters: 1,
		expenses: [],
		total: 0,
	},
	{
		name: "Evan",
		eaters: 1,
		expenses: [],
		total: 0,
	},
];

const personInputSlice = createSlice({
	name: "personInput",
	initialState: initialState,
	reducers: {
		updateEaters: (state, action) => {
			state.map((obj) => {
				if (obj.name === action.payload.name) {
					return (obj.eaters = action.payload.eaters);
				}
				return state;
			});
		},
		addExpense: (state, action) => {
			const personIndex = state.findIndex(
				(obj) => obj.name === action.payload.name
			);
			state[personIndex].expenses.push(action.payload.expense);
		},
		removeExpense: (state, action) => {
			const personIndex = state.findIndex(
				(obj) => obj.name === action.payload.name
			);
			const indexOfObjToRemove = state[personIndex].expenses.findIndex(
				(obj) => obj.id === action.payload.id
			);
			state[personIndex].expenses.splice(indexOfObjToRemove, 1);
		},
		clearExpenses: (state, action) => {
			const personIndex = state.findIndex(
				(obj) => obj.name === action.payload.name
			);
			state[personIndex].expenses = [];
		},
		updateTotals: (state) => {
			let total;
			state.map((personObj) => {
				const values = personObj.expenses.map((expense) => {
					return expense.amount;
				});
				const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);
				personObj.total = sum;
			});
		},
		resetState: (state) => {
			return (state = initialState);
		},
	},
});

export const {
	updateEaters,
	addExpense,
	removeExpense,
	clearExpenses,
	updateTotals,
	resetState,
} = personInputSlice.actions;

export default personInputSlice.reducer;

/* 
~~~ State Example ~~~
state: {
    personInput: [{
		name: "Joel",
        eaters: 5,
        expenses: [
			{
				id: Date.now()
				expenseName: Costco
				amount: 100
			},
			{
				id: Date.now()
				expenseName: Kroger
				amount: 60
			},
        ],
		total: 160,
	},
	],
}
*/

/*
~~~ Expense action example ~~~
action.payload = { 
    name: Joel, 
    expense: {
        id: Date.now()
        expenseName: Costco
        amount: 100
    }
}
*/
