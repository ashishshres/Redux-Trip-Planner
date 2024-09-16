import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { markItem, removeItem } from "../features/plannerSlice";

const Item = ({ data }) => {
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();
    const handleRemove = (removeId) => {
        dispatch(removeItem(removeId));
    };

    const handleChange = (updateId) => {
        setIsChecked(!isChecked);
        dispatch(markItem(updateId));
    };

    return (
        <li className="flex justify-between items-center w-full px-3 py-3 bg-gray-700 rounded-md">
            <span className="flex gap-3 items-center justify-center">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={data.itemChecked}
                    onChange={() => handleChange(data.itemId)}
                    title="Mark item"
                />
                <span className={`${data.itemChecked && "line-through"}`}>
                    {data.itemName}
                </span>
                <div className="badge badge-outline">{data.itemTotal}</div>
            </span>
            <span
                onClick={() => handleRemove(data.itemId)}
                className="cursor-pointer active:scale-90"
                title="Remove item"
            >
                ❌
            </span>
        </li>
    );
};

export default Item;
