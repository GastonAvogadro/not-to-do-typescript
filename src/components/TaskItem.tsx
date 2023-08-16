import { TasksType, SetTasksType } from '../types';
import { useAppContext } from '../context/AppContext';
import { ReactComponent as TrashCan } from '../assets/trashCan.svg';

interface Props {
    task: TasksType;
    tasks: TasksType[];
    setTasks: SetTasksType;
}

const TaskItem: React.FC<Props> = ({ task, tasks, setTasks }) => {
    const { theme } = useAppContext();

    function handleCheckClass() {
        if (theme === 'light') {
            return task.checked ? 'bg-lightPrimary border-black' : 'bg-transparent border-black';
        } else {
            return task.checked ? 'bg-darkPrimary border-white' : 'bg-transparent border-white';
        }
    }

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
        <li
            className={`flex justify-between items-center rounded-md p-4 border ${
                theme === 'light' ? 'border-black bg-white' : 'border-white bg-black'
            }`}
        >
            <div onClick={handleCheck} className="flex gap-2">
                <button className={`w-[25px] h-[25px] rounded-md border ${handleCheckClass()}`}>
                    {task.checked ? <span className="text-white">✔</span> : null}
                </button>
                <p className={`cursor-pointer ${task.checked ? 'line-through' : ''}`}>{task.text}</p>
            </div>
            <TrashCan
                onClick={handleRemove}
                className="themeIcon w-[30px] h-[30px] cursor-pointer relative right-0 hover:scale-110 transition-transform"
            />
        </li>
    );
};
export default TaskItem;
