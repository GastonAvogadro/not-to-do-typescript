import { ContextProvider } from './context/AppContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/App.scss';

const App: React.FC = () => {
    return (
        <ContextProvider>
            <Header />
            <TaskForm />
            <TaskList />
        </ContextProvider>
    );
};

export default App;
