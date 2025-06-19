import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'pending' ? 'done' : 'pending' } : task
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mini Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleStatus={toggleStatus} />
    </div>
  );
};

export default App;
