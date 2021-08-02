import "./RandomColorSquare.css";
import { useState } from "react";

export default function RandomColorSquare() {
    const [color, setColor] = useState("darkviolet");

    const randomizeColor = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + color;
    }

    return (
        <div className="square"
             style={{ backgroundColor: color }}
             onClick={() => setColor(randomizeColor)}>
            Change me
        </div>
    )
}