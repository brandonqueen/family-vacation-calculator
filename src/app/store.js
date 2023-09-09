import { configureStore } from "@reduxjs/toolkit";
import personInputReducer from "../features/personInput/personInputSlice";

export const store = configureStore({
	reducer: {
		personInput: personInputReducer,
	},
});

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
