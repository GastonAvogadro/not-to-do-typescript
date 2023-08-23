import { useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { ReactComponent as AddItem } from '../assets/addItem.svg';

const TaskForm: React.FC = () => {
    const { tasks, setTasks } = useAppContext();
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const inputValue = inputRef.current?.value;

        if (inputValue !== '') {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                checked: false,
            };
            inputRef.current ? (inputRef.current.value = '') : null;
            setTasks([...tasks, newTask]);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
            <input
                ref={inputRef}
                className="py-2 px-4 rounded-md w-full ml-[2px]"
                type="text"
                placeholder="Ingresar tarea"
                autoFocus
                maxLength={50}
                required
            />

            <button type="submit">
                <AddItem className="themeIcon hover:scale-110 transition-transform" />
            </button>
        </form>
    );
};
export default TaskForm;
