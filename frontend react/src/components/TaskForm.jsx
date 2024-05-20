import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks, taskToEdit, setTaskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, completed };

    try {
      if (taskToEdit) {
        await axios.put(`http://localhost:8000/api/tasks/${taskToEdit.id}/`, taskData);
        setTaskToEdit(null);
      } else {
        await axios.post('http://localhost:8000/api/tasks/', taskData);
      }
      fetchTasks();
      setTitle('');
      setDescription('');
      setCompleted(false);
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <div style={styles.formGroup}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={styles.textarea}
        />
      </div>
      <div style={styles.formGroup}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            style={styles.checkbox}
          />
          Completed
        </label>
      </div>
      <button type="submit" style={styles.button}>
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    margin: '2rem 0',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    height: '5rem',
  },
  checkbox: {
    marginLeft: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default TaskForm;
