import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <TaskList />
      <Footer />
    </div>
  );
};

export default App;