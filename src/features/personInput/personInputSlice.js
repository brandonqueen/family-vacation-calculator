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
		addExpense: (state, action) => {},
		removeExpense: (state, action) => {},
		clearExpenses: (state, action) => {
			state.map((obj) => {
				if (obj.name === action.payload.name) {
					return (obj.expenses = []);
				}
				return state;
			});
		},
	},
});

export const { updateEaters, addExpense, removeExpense, clearExpenses } =
	personInputSlice.actions;

export default personInputSlice.reducer;

/*
state: {
    personInput: {
        {name: "Joel",
        eaters: 5,
        expenses: [
            {
                id: Date.now()
                expense: Costco
                cost: 100
            },
            {
                id: Date.now()
                expense: Kroger
                cost: 60
            },
        ]},
    },
}
*/

/*
action.payload = { 
    name: Joel, 
    expense: {
        id: Date.now()
        expense: Costco
        cost: 100
    }
}
*/
