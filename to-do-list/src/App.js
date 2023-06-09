import './index.css';
import {MdEdit} from 'react-icons/md';
import {BsTrash} from 'react-icons/bs';
import {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');
  const [noTaskYet, setNoTaskYet] = useState('No tasks has been assigned yet');

  useEffect(()=>{
    tasks.length === 0? setNoTaskYet('No tasks has been assigned yet'): setNoTaskYet(''); 
    console.log(noTaskYet)
  }, [tasks])
  
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])

  function handleNewTask() {
    if(newTask!=''){
      setTasks([...tasks, newTask]); setNewTask('');
    }else {
      setError('You cant create a task without a name you idiot!')
    }
  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index); // create a new array that excludes the item to delete
    setTasks(updatedTasks);
  }


  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleNewTask()
    }
  }
  return (
    <div className="App" data-aos="fade-up">
      <div id='todo'>
        <div id='new'>
          <h1>Get things done!</h1>
          <input 
          type='text'
          value={newTask} 
          placeholder='What do you want to do?'
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setError(''); setNewTask(e.target.value)}}
          />
          <button onClick={handleNewTask}>Add Task</button>
        </div>
        <div id='tasks'>
          <p data-aos="fade-up">{error}</p>
          <p data-aos="fade-up">{noTaskYet}</p>
          {tasks.map((task, index)=> {
             return <div className='task' key={index} data-aos="fade-up">
              <p>{task}</p><div className='options'>
                <BsTrash className='option' onClick={()=> handleDelete(index)}/> 
                </div>
                </div>})}
        </div>
      </div>
    </div>
  );
}

export default App;
