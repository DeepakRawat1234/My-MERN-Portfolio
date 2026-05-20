import react from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import {useState} from "react"
import AboutProject from "./pages/AboutProjects";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';

function App() {
  const [FooterData,setFooterData] = useState("");
  const getDataFromHome = (data) => {
   setFooterData(data);
};
  return (
    <div className=''>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home sendData={getDataFromHome}/>} />
       <Route path="/project/:id" element={<AboutProject />} ></Route>
      
    </Routes>
    <Footer userData={FooterData}/>
   </div>
    
  )
}
export default App;