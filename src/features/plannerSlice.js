import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("trip")) || [],
};

const saveToLocalStorage = (state) => {
    localStorage.setItem("trip", JSON.stringify(state));
};

export const plannerSlice = createSlice({
    name: "plannerSlice",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.unshift({
                itemId: action.payload.id,
                itemName: action.payload.item,
                itemChecked: action.payload.checked,
                itemTotal: action.payload.total,
                itemCreated: Date.now(),
            });
            saveToLocalStorage(state.items);
        },
        removeItem: (state, action) => {
            const modifiedItems = state.items.filter(
                (item) => item.itemId !== action.payload
            );
            state.items = modifiedItems;
            saveToLocalStorage(state.items);
        },
        markItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.itemId === action.payload) {
                    return { ...item, itemChecked: !item.itemChecked };
                }
                return item;
            });
            saveToLocalStorage(state.items);
        },
        sortItems: (state, action) => {
            if (action.payload === "description") {
                state.items.sort((a, b) => {
                    if (a.itemName < b.itemName) {
                        return -1;
                    }
                    if (a.itemName > b.itemName) {
                        return 1;
                    }
                    return 0;
                });
            } else if (action.payload === "input-order") {
                state.items.sort((a, b) => b.itemCreated - a.itemCreated);
            } else if (action.payload === "packed-status") {
                state.items.sort((a, b) => a.itemChecked - b.itemChecked);
            }
            saveToLocalStorage(state.items);
        },
    },
});

export const { addItem, removeItem, markItem, sortItems } =
    plannerSlice.actions;

export default plannerSlice.reducer;
