const TaskForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Ingresar texto"/>
            <button type="submit">+</button>
        </form>
    );
};
export default TaskForm;
