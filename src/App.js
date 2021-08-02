import "./index.css";
import RandomColorSquare from "./RandomColorSquare/RandomColorSquare";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";

function App() {
  return (
    <div>
        <Menu>
            <MenuItem link="https://www.google.co.il/en" text="Google-IL (English)" />
            <MenuItem link="https://www.google.co.il/he" text="Google-IL (Hebrew)" />
            <MenuItem link="https://www.google.com/en" text="Google-US (English)" />
        </Menu>
        <RandomColorSquare />
    </div>
  );
}

export default App;
