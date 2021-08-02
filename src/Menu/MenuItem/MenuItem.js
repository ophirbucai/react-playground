import "./MenuItem.css";

export default function MenuItem({ link, text }) {
    return (
        <li className="menu-item">
            <a href={link} target="_blank">{text}</a>
        </li>
    )
}