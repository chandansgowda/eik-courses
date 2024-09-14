import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import './index.css';
import ExploreCourse from './pages/ExploreCourse';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses/:id' element={<ExploreCourse/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
