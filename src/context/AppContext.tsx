import { createContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
    
    return <AppContext.Provider value={'hola'}>{children}</AppContext.Provider>;
};
