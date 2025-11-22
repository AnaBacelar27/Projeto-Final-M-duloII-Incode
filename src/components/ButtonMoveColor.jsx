import React from "react";
import "../styles/ButtonMoveColor.css";

function ButtonMoveColor({ isClicked, setIsClicked }) {
    const handleClick = () => {
        setIsClicked(!isClicked); // Atualiza o estado no componente pai (PopPup1)
    };

    return (
        <div className="toggle-container">
            <div
            onClick={handleClick}
            className={`toggle-button ${isClicked ? 'clicked' : ''}`}>
                <div className="toggle-circle"></div>
            </div>
        </div>
    )
}

export default ButtonMoveColor;