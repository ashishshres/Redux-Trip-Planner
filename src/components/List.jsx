import React from "react";
import Sort from "./Sort";
import Item from "./Item";
import { useSelector } from "react-redux";

const List = () => {
    const { items } = useSelector((state) => state.plannerSlice);

    return (
        <div className="mt-6 w-full flex flex-col gap-5 h-96 overflow-scroll overflow-x-hidden">
            <Sort />
            <ul className="flex flex-col gap-2">
                {items.length > 0 ? (
                    items.map((item) => <Item key={item.itemId} data={item} />)
                ) : (
                    <h1>No items added</h1>
                )}
            </ul>
        </div>
    );
};

export default List;
