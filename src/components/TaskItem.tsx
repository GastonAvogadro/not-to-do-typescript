import { Tasks, SetTasks } from '../types';

interface Props {
    task: Tasks;
    tasks: Tasks[];
    setTasks: SetTasks['SetState'];
}

const TaskItem: React.FC<Props> = ({ tasks, setTasks }) => {
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
