import { useRef } from 'react';
import { TasksType, SetTasksType } from '../types';

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
                id: tasks.length,
                text: inputValue,
                checked: false,
            };
            inputRef.current ? (inputRef.current.value = '') : null;
            setTasks([...tasks, newTask]);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Ingresar tarea" autoFocus />
            <button type="submit">+</button>
        </form>
    );
};
export default TaskForm;
