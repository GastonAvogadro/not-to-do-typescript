import { useState } from 'react';
import { Tasks, SetTasks } from '../types';

interface Props {
    tasks: Tasks[];
    setTasks: SetTasks;
}

const TaskForm: React.FC<Props> = ({ tasks, setTasks }) => {
    
    const [input, setInput] = useState('');

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        const newTask = {
            id: tasks.length,
            text: input,
            checked: false,
        };
        evt.preventDefault();
        setTasks((prevTasks) => [...prevTasks, newTask]);
        console.log(tasks);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        e.key === 'Enter' && handleSubmit;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingresar tarea"
                autoFocus
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button type="submit">+</button>
        </form>
    );
};
export default TaskForm;
