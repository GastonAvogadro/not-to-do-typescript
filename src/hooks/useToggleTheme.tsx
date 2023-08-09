import { useState } from 'react';

type Theme = 'light' | 'dark';

const useThemeToggle = (): [Theme, () => void] => {
    const detectPreferredTheme = (): Theme => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            savedTheme === 'dark' ? document.body.classList.add('darkTheme') : null;
            return savedTheme;
        } else {
            const isDarkMode =
                window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (isDarkMode) {
                document.body.classList.add('darkTheme');
                return 'dark';
            } else {
                return 'light';
            }
        }
    };

    const [theme, setTheme] = useState<Theme>(detectPreferredTheme());

    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        newTheme === 'dark'
            ? document.body.classList.add('darkTheme')
            : document.body.classList.remove('darkTheme');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return [theme, toggleTheme];
};

export default useThemeToggle;
