import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Education from './Components/Education';
import Interests from './Components/Interests';
import Main from './Components/Main';
import ProgrammingSkills from './Components/ProgrammingSkills';
import Projects from './Components/Projects';
import WorkHistroy from './Components/WorkHistory';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/Education' element={<Education/>} />
              <Route path='/Interest' element={<Interests/>} />
              <Route path='/Programming' element={<ProgrammingSkills/>} />
              <Route path='/Project' element={<Projects/>} />
              <Route path='/WorkHistory' element={<WorkHistroy/>} />
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
