import { TasksType, SetTasksType } from '../types';
import TaskItem from './TaskItem';

interface Props {
    tasks: TasksType[];
    setTasks: SetTasksType;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    
    return (
        <ul className='w-full'>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />;
            })}
        </ul>
    );
};
export default TaskList;
