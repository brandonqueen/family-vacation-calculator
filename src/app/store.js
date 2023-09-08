import { configureStore } from "@reduxjs/toolkit";
import { expensesSlice } from "../features/expenses/expensesSlice";

const store = configureStore({
	//inputModal: inputModalSlice,
	expenses: expensesSlice,
});

export default store;
