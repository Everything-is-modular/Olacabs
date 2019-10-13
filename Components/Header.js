import React from "react"
import './style.css';
import menu from "../Assets/menu.svg";

let Header = () => {
    return (
        <div className="header-wrapper">
                
                <img src={menu}></img>
                <p>Your Rides</p>
                
        </div>

    );
}
export default Header;
