import React from 'react';

const TaskItem = ({ task, setTaskToEdit, deleteTask }) => {
  return (
    <li style={styles.taskItem}>
      <h2 style={styles.taskTitle}>{task.title}</h2>
      <p style={styles.taskDescription}>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
      <button onClick={() => {
        console.log('Editing task:', task); // Debug: log the task being edited
        setTaskToEdit(task);
      }} style={styles.button}>Edit</button>
      <button onClick={() => {
        console.log('Deleting task:', task); // Debug: log the task being deleted
        deleteTask(task.id);
      }} style={styles.button}>Delete</button>
    </li>
  );
};

const styles = {
  taskItem: {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '5px',
  },
  taskTitle: {
    margin: '0',
    fontSize: '1.5rem',
  },
  taskDescription: {
    margin: '0.5rem 0',
    fontSize: '1rem',
  },
  button: {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default TaskItem;
