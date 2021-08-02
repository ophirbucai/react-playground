import "./Menu.css";
import { useState } from "react";

export default function Menu(props) {
    const [showMenu, setShowMenu] = useState("none");

    return (
        <nav>
            <button onClick={() => setShowMenu(showMenu==="none" ? "block" : "none")}>Menu</button>
            <ul
                className="menu"
                style={{ display: showMenu}}>
                {props.children}
            </ul>
        </nav>
    )
}