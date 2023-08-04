import { Tasks } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useLocalStorage<Tasks[]>('localData', []);

    return (
        <>
            <Header />
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default App;
