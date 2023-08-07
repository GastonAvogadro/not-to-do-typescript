import useThemeToggle from '../hooks/useToggleTheme';

const Header = () => {
    const [theme, toggleTheme] = useThemeToggle();

    return (
        <header>
            <h1>¿Qué no tengo que hacer hoy?</h1>
            <button onClick={toggleTheme}>{theme}</button>
        </header>
    );
};
export default Header;
