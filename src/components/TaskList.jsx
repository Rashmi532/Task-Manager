import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{
            textDecoration: task.status === 'done' ? 'line-through' : 'none'
          }}>
            {task.title}
          </span>
          <button onClick={() => toggleStatus(task.id)}>
            {task.status === 'pending' ? 'Mark Done' : 'Mark Pending'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
