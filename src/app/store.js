import { configureStore } from "@reduxjs/toolkit";
import personInputReducer from "../features/personInput/personInputSlice";

export const store = configureStore({
	reducer: {
		personInput: personInputReducer,
	},
});

/*
state structure: {
    {
        name: Joel,
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
        ]
    },
}
*/
