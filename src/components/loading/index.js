import React from "react";
import { GiJumpingDog } from "react-icons/gi";
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
            <GiJumpingDog className="styled-loading"/>
        </div>
    );
};

export default Loading;
