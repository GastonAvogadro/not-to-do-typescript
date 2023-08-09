import { TasksType } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ContextProvider } from './context/AppContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App: React.FC = () => {
    const [tasks, setTasks] = useLocalStorage<TasksType[]>('savedTasks', []);

    return (
        <ContextProvider>
            <Header />
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </ContextProvider>
    );
};

export default App;
