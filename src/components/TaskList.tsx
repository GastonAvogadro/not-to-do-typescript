import { Tasks } from '../types';
import TaskItem from './TaskItem';

interface Props {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
    return (
        <div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
            })}
        </div>
    );
};
export default TaskList;
