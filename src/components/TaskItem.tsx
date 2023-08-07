import { TasksType, SetTasksType } from '../types';

interface Props {
    task: TasksType;
    tasks: TasksType[];
    setTasks: SetTasksType;
}

const TaskItem: React.FC<Props> = ({ task, tasks, setTasks }) => {
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
