import React from "react";
import { GiJumpingDog } from "react-icons/gi";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <GiJumpingDog className="styledLoading"/>
        </div>
    );
};

export default Loading;
