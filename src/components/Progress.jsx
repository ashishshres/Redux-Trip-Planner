import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Progress = () => {
    const { items } = useSelector((state) => state.plannerSlice);
    const markedItems = items.filter((item) => item.itemChecked);
    const progress = (markedItems.length / items.length) * 100;
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        setProgressValue(progress);
    }, [progress]);

    return (
        <div className="my-3 w-full">
            <h1 className="text-center">
                You have packed {progressValue ? progressValue.toFixed(0) : 0}%
                items
            </h1>
            <progress
                className="progress progress-primary w-full mt-3 ease-in-out"
                value={progressValue}
                max="100"
            ></progress>
        </div>
    );
};

export default Progress;
