import React, { useState } from 'react';
import './TodoList.css'


export default function TodoList() {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = (e) => {
        const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
        setTodoList([
            ...todoList,
            {
                id: newId,
                value: newTask,
                completed: false
            }
        ]);
        setNewTask('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const deleteTask = (id) => {
        const filtredTaskList = todoList.filter((task) => task.id !== id);
        setTodoList(filtredTaskList);
    };

    const completeTask = (id) => {
        const updatedTaskList = todoList.map((task) =>
            task.id === id ? { ...task, completed: true } : task
        );
        setTodoList(updatedTaskList);
    };

    const undoTask = (id) => {
        const updatedTaskList = todoList.map((task) =>
            task.id === id ? { ...task, completed: false } : task
        );
        setTodoList(updatedTaskList);
    };

    return (
        <div>
            <h1>What to do ..!</h1>

            <div className="addTask">
                <input
                    type="text"
                    placeholder='Add new task...'
                    value={newTask}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addTask} >+</button>
            </div>

            <div className="todoList">
                {todoList.map((task, key) => (
                    <div key={key} className={`todoList-item ${task.completed ? 'completed' : ''}`}>
                        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.value}</div>

                        <div>
                            <button onClick={() => completeTask(task.id)} disabled={task.completed}>
                                ✔
                            </button>
                            <button onClick={() => undoTask(task.id)} disabled={!task.completed}>
                                ↩
                            </button>
                            <button onClick={() => deleteTask(task.id)}>
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
