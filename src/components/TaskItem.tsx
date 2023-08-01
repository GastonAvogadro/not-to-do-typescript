import { Tasks } from '../types';

interface Props {
    task: { id: number; text: string; checked: boolean };
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TaskItem = ({ task, tasks, setTasks }: Props) => {
    function handleCheck() {
        let result = tasks.map((element) => {
            if (element.id === task.id) {
                element.checked ? (element.checked = false) : (element.checked = true);
            }
            return element;
        });
        setTasks(result);
    }

    function handleRemove() {
        let result = tasks.filter((element) => {
            return element.id !== task.id;
        });
        setTasks(result);
    }

    return (
        <div>
            <button onClick={handleCheck}>✔</button>
            <p className={task.checked ? 'line-through' : undefined}>{task.text}</p>
            <button onClick={handleRemove}>Eliminar</button>
        </div>
    );
};
export default TaskItem;
