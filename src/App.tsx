import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import './index.css';
import ExploreCourse from './pages/ExploreCourse';
import Cards from './components/Cards';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses/:id' element={<ExploreCourse/>}></Route>
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  )
}

export default App
