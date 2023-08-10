import { createContext, useContext } from 'react';
import { ThemeType, ThemeToggleType, useThemeToggle } from '../hooks/useThemeToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TasksType, SetTasksType } from '../types';

type AppContextType = {
    tasks: TasksType[];
    setTasks: SetTasksType;
    theme: ThemeType;
    toggleTheme: ThemeToggleType;
};

type ProviderProps = {
    children: React.ReactNode;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage<TasksType[]>('savedTasks', []);
    const [theme, toggleTheme] = useThemeToggle();

    const contextValue = {
        tasks,
        setTasks,
        theme,
        toggleTheme,
    };
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    return useContext(AppContext);
};
