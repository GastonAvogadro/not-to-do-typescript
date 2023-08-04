import { useState } from 'react';

// type ReturnType<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];
type UpdateValue<T> = (newValue: T) => void;


export const useLocalStorage = <T,>(key: string, initialValue: T): [T, UpdateValue<T>] => {
    const [value, setValue] = useState<T>(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const updateValue: UpdateValue<T> = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
    };

    return [value, updateValue];
};
