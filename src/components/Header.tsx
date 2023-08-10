import { useAppContext } from "../context/AppContext";

const Header: React.FC = () => {
    const {theme, toggleTheme} = useAppContext();

    return (
        <header>
            <h1 className="font-bold text-[2rem]">¿Qué no tengo que hacer hoy?</h1>
            <button onClick={toggleTheme}>tema= {theme}</button>
        </header>
    );
};
export default Header;
