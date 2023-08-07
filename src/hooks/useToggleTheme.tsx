import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const useThemeToggle = (): [Theme, () => void] => {
    const detectPreferredTheme = (): Theme => {
        const isDarkMode =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDarkMode ? 'dark' : 'light';
    };
    const [theme, setTheme] = useState<Theme>(detectPreferredTheme());

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        savedTheme ? setTheme(savedTheme) : null;
    }, []);

    const toggleTheme = (): void => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return [theme, toggleTheme];
};

export default useThemeToggle;
