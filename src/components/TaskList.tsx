import { useAppContext } from '../context/AppContext';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
    const { tasks, setTasks } = useAppContext();

    return (
        <ul className="w-full">
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />;
            })}
        </ul>
    );
};
export default TaskList;
