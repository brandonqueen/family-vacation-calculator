import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		name: "Joel",
		eaters: 5,
		expenses: [],
	},
	{
		name: "Josh",
		eaters: 5,
		expenses: [],
	},
	{
		name: "Katie",
		eaters: 3,
		expenses: [],
	},
	{
		name: "Melody",
		eaters: 1,
		expenses: [],
	},
	{
		name: "Evan",
		eaters: 1,
		expenses: [],
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
		removeExpense: (state, action) => {},
		clearExpenses: (state, action) => {
			const personIndex = state.findIndex(
				(obj) => obj.name === action.payload.name
			);
			state[personIndex].expenses = [];
		},
	},
});

export const { updateEaters, addExpense, removeExpense, clearExpenses } =
	personInputSlice.actions;

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
        ]
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
