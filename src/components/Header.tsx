import { useAppContext } from "../context/AppContext";
import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
    const {theme, toggleTheme} = useAppContext();

    return (
        <header>
            <h1 className="font-bold text-[2rem]">¿Qué no tengo que hacer hoy?</h1>
            <button onClick={toggleTheme}> Cambiar tema= {theme}</button>
            <ThemeSwitch />
        </header>
    );
};
export default Header;
