import { configureStore } from "@reduxjs/toolkit";
import plannerSlice from "../features/plannerSlice";

export const store = configureStore({
    reducer: {
        plannerSlice: plannerSlice,
    },
});
