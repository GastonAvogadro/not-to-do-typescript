import { useRef } from 'react';
import { TasksType, SetTasksType } from '../types';
import { ReactComponent as AddCircle } from '../assets/addCircle.svg';

interface Props {
    tasks: TasksType[];
    setTasks: SetTasksType;
}

const TaskForm: React.FC<Props> = ({ tasks, setTasks }) => {
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
                className="py-2 px-4 rounded-md w-full"
                type="text"
                placeholder="Ingresar tarea"
                autoFocus
            />

            <button type="submit">
                <AddCircle className="hover:scale-110 transition-transform" />
            </button>
        </form>
    );
};
export default TaskForm;
