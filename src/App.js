// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Employee from './Employee'
import Home from './components/Home'
import AddEmployee from './AddEmployee'
import Profile from './Profile'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Sidebar />}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    <Route path="/Employee" element={<Employee/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/create" element={<AddEmployee/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
