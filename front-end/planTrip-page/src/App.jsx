import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';

const PlanTrip = () => {
  const [tasks, setTasks] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    // Function to get URL parameter
    const getUrlParameter = (name) => {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const destination = getUrlParameter('destination');
    const startDate = new Date(getUrlParameter('startDate'));
    const endDate = new Date(getUrlParameter('endDate'));

    const savedBudget = localStorage.getItem('budget');
    setBudget(savedBudget ? parseInt(savedBudget) : 0);

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = savedTasks.filter(task => {
      const taskDate = new Date(task.date);
      return taskDate >= startDate && taskDate <= endDate;
    });
    setTasks(filteredTasks);
  }, []);

  const addTask = () => {
    const taskInput = document.querySelector("#task");
    const dateInput = document.querySelector("#tododate");

    const newTask = {
      task: taskInput.value,
      date: dateInput.value
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    taskInput.value = '';
    dateInput.value = '';
  }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const saveBudget = () => {
    localStorage.setItem('budget', budget);
    alert('Budget saved successfully!');
  }

  const addToBudget = () => {
    const budgetInput = document.getElementById('budgetInput');
    const amount = parseInt(budgetInput.value);
    if (!isNaN(amount)) {
      setBudget(prevBudget => prevBudget + amount);
    }
    budgetInput.value = '';
  }

  const subtractFromBudget = () => {
    const budgetInput = document.getElementById('budgetInput');
    const amount = parseInt(budgetInput.value);
    if (!isNaN(amount)) {
      setBudget(prevBudget => Math.max(prevBudget - amount, 0));
    }
    budgetInput.value = '';
  }

  const clearBudget = () => {
    localStorage.removeItem('budget');
    setBudget(0);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='complete3'>
    <NavBar></NavBar>
    <div className="container">
      <h1 className="main-heading">Trip Planner</h1>
      <div className="input-container">
        <input type="text" id="task" placeholder="Enter the destination" />
        <input type="date" id="tododate" />
        <button id="button" onClick={addTask}>Add</button>
      </div>
      <div id="display">
        {tasks.map((task, index) => (
          <div key={index}>
            <div>
              <span>{task.task} </span>
              <span>{task.date}</span>
              <button onClick={() => deleteTask(index)} id='db'>delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="budgetcontainer">
        <h2>Budget Calculator</h2>
        <input type="number" id="budgetInput" placeholder="Enter your budget" />
        <div>
          <button onClick={addToBudget} id='b1'>Add</button>
          <button onClick={subtractFromBudget} id='b2'>Subtract</button>
          <button onClick={clearBudget} id='b3'>Clear </button>
        </div>
        <p>Remaining Budget: <span id="remainingBudget">{budget}</span></p>
        <button onClick={saveBudget} id='sb'>Save Budget</button>
      </div>
    </div>
    </div>
  );
}

export default PlanTrip;

