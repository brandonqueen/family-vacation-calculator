import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
	name: "expenses",
	initialState: {},
	reducers: {
		addExpense: (state, action) => {},
		removeExpense: (state, action) => {},
		clearExpenses: (state, action) => {},
	},
});

export const { addExpense, removeExpense, clearExpenses } =
	expensesSlice.actions;
export default expensesSlice.reducer;





/*
state: {
    {
        name: Joel
        eaters: 5
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
        ]
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