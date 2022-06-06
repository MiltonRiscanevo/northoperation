import './App.css';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import Table from './components/Table/Table'
import Trainings from './components/trainings/Trainings'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Navbar/>
        <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/trainings' element={<Trainings/>}/>
            <Route path='/' element={<Table/>}/>
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
