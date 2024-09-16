import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortItems } from "../features/plannerSlice";

const Sort = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.plannerSlice);
    const [sortVal, setSortVal] = useState("input-order");

    const sortHandler = (e) => {
        setSortVal(e.target.value);
        dispatch(sortItems(e.target.value));
    };

    useEffect(() => {
        dispatch(sortItems(sortVal));
    }, [items]);

    return (
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Items</h2>
            <select
                className="select select-bordered w-full max-w-fit"
                defaultValue="input-order"
                onChange={sortHandler}
            >
                <option value="input-order">Input Order</option>
                <option value="description">Description</option>
                <option value="packed-status">Packed Status</option>
            </select>
        </div>
    );
};

export default Sort;
