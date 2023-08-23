import ThemeSwitch from './ThemeSwitch';

const Header: React.FC = () => {
    return (
        <header className='flex flex-col justify-center items-center mb-4'>
            <ThemeSwitch  />
            <h1 className="font-bold text-[1.6rem] sm:text-[2rem]">¿Qué no tengo que hacer hoy?</h1>
        </header>
    );
};
export default Header;
