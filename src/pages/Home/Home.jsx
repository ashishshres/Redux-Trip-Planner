import React from "react";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import List from "../../components/List";
import Progress from "../../components/Progress";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center flex-col max-w-96 mx-auto px-4">
            <Navbar />
            <Input />
            <List />
            <Progress />
        </div>
    );
};

export default Home;
