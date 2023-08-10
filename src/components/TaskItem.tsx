import { TasksType, SetTasksType } from '../types';
import { ReactComponent as TrashCan } from '../assets/trashCan.svg';

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
        <li className="flex">
            <button
                onClick={handleCheck}
                className={`w-[25px] h-[25px] bg-white rounded-md border border-black`}
            >
                {task.checked ? <span>✔</span> : null}
            </button>
            <p className={task.checked ? 'line-through' : undefined}>{task.text}</p>
            <TrashCan
                onClick={handleRemove}
                className="w-[30px] h-[30px] cursor-pointer hover:scale-110 transition-transform"
            />
        </li>
    );
};
export default TaskItem;
