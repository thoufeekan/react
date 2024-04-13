import './App.css';
import Navbar from './components/Navbar'
import Register from './components/EmployeeForm'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
         <Navbar />
         <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/register" element={<Register />}/>
         </Routes>
    </div>
  );
}

export default App;
