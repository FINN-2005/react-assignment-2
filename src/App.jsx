import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar }  from './navbar.jsx'
import { Home } from './home.jsx'
import { About } from './about.jsx'
import Task from './task.jsx';
import './App.css'
import { useState } from 'react';


/*

pages:
    - Home (?filter=active)
    - Tasks (tasks/:id)
    - About
    - 404

notes:
    - all pages need active styled navbar
    - push to github

*/ 




export default function App() {

  // tasks
  const [tasks, SetTasks] = useState([
    {
      id: 0,
      name:'finish react assignment 2',
      description: 'this assignment is about showcasing the use of routing in dynamic content in react\nHere is the exact problem statement\n\'Multi-page Task Manager: Home, Tasks, /tasks/:id detail, About. Active NavLink styling. 404 page. URL-based filter (?filter=active). Push to GitHub.\'',
      status: 'active'
    },
  ]);

  return (
    <BrowserRouter>

      <div className="nav-bar">
        <NavBar />
      </div>
    
      <Routes>
    
        <Route path='/' element={<Home tasks={tasks} SetTasks={SetTasks}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/task/:id' element={<Task tasks={tasks} SetTasks={SetTasks} />} />
        <Route path='*' element={<h2>The Page you are looking for could not be Found!</h2>} />
    
      </Routes>
    
    </BrowserRouter>
  );
}
