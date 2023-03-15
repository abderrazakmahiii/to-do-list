import './index.css';
import {MdEdit} from 'react-icons/md';
import {BsTrash} from 'react-icons/bs';
import {useState, useEffect} from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTask = () => {
    setTasks([...tasks, newTask])
    setNewTask('')

  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index); // create a new array that excludes the item to delete
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div id='todo'>
        <div id='new'>
          <h1>Get things done!</h1>
          <input 
          type='text'
          value={newTask} 
          placeholder='What do you want to do?'
          onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleNewTask}>Add Task</button>
        </div>
        <div id='tasks'>
          {tasks==[] ? <p>No task has been assigned yet</p>:tasks.map((task, index)=> {
            return<div className='task' key={index}>
            <p>{task}</p>
            <div className='options'>
              <BsTrash className='option' onClick={()=> handleDelete(index)}/>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
