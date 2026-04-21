import { useEffect } from "react";
import { themeAtom } from "../atoms/Theme";
import { useRecoilState } from "recoil";


function ThemeToggle(){
    const [theme, setTheme] = useRecoilState(themeAtom);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      };
    return(
        <div>
            <button onClick={toggleTheme} >Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
        </div>
    );
}

export default ThemeToggle;