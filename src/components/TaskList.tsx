import { Tasks, SetTasks } from '../types';
import TaskItem from './TaskItem';

interface Props {
    tasks: Tasks[];
    setTasks: SetTasks['SetState'];
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />;
            })}
        </div>
    );
};
export default TaskList;
