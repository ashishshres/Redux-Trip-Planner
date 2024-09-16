import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/plannerSlice";

const Input = () => {
    const [newItem, setNewItem] = useState("");
    const [number, setNumber] = useState(1);

    const dispatch = useDispatch();

    const addItemHandler = () => {
        if (newItem.trim()) {
            const addNew = {
                id: nanoid(),
                item: newItem,
                checked: false,
                total: number,
            };
            dispatch(addItem(addNew));
            setNewItem("");
        }
    };

    return (
        <div className="flex gap-2 w-full">
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                name="item"
                id="item"
                placeholder="Item for trip..."
                className="input input-bordered w-full max-w-xs"
                autoComplete="off"
            />
            <select
                className="select select-bordered w-full max-w-fit"
                defaultValue="one"
                onChange={(e) => setNumber(e.target.value)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <button
                onClick={addItemHandler}
                className="btn btn-active btn-primary"
            >
                Add
            </button>
        </div>
    );
};

export default Input;
