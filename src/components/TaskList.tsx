import { Tasks } from '../types';

interface Props {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
    return <div>TaskList</div>;
};
export default TaskList;
