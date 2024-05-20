import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (taskId) => {
    console.log('Task ID to delete:', taskId); // Debug: log the task ID being deleted
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${taskId}/`);
      fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm fetchTasks={fetchTasks} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} setTaskToEdit={setTaskToEdit} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
