import React from "react";
import "./errorMessage.css";
import img from "./error.png";

const ErrorMessage = () => {
    return (
        <div className="random-block" >
            <img src={img} alt="error"></img>
            <span className="span-error">Something goes wrong</span>
        </div>
    )
}

export default ErrorMessage;