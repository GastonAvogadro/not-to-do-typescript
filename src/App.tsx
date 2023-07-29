import { useState } from 'react';
import { Tasks } from './types';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    return (
        <>
            <Header />
            <TaskForm tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default App;
