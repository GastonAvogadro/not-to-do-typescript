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
                return <TaskItem task={task}/>
            })}
        </div>
    );
};
export default TaskList;
