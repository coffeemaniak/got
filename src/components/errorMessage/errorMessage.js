import React from "react";
import "./errorMessage.css";
import img from "./error.png";

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error"></img>
            <span className="span-error">Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;