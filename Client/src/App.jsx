import react from 'react';
import {  Routes, Route,useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {useState} from "react"
import AboutProject from "./pages/AboutProjects";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from "./pages/AdminDashboard.jsx"

// import Register from './components/Register';
// import Dashboard from './components/Dashboard';

function App() {
   const location = useLocation();
  const [FooterData,setFooterData] = useState("");
   const hideLayout = location.pathname === "/login";
   const hideNav = location.pathname === "/admin-dashboard";
  const getDataFromHome = (data) => {
   setFooterData(data);
};
  return (
    <div className=''>
   {!hideLayout && !hideNav && <Navbar  userPassword={FooterData}/>}
    <Routes>
      <Route path="/" element={<Home sendData={getDataFromHome}/>} />
       <Route path="/project/:id" element={<AboutProject />} ></Route>
      <Route path="/login" element ={<Login/>}></Route>
      <Route path="/admin-dashboard" element ={<Dashboard/>}></Route>
     
    </Routes>
       {!hideLayout && !hideNav && <Footer userData={FooterData} />}
    
   </div>
    
  )
}
export default App;