import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Certificate from '../components/Certificate.jsx'
import Footer from '../components/Footer.jsx'
import { useEffect,useState } from 'react';
const Home = ({sendData}) => {
  const [myData,setMydata]=useState({});
  const [myskills,setMyskills]=useState([]);
  const [certificatesData,setCertificatesData]=useState([]);
    
  useEffect(() => {
    const fetchData=async()=>{
      try {
  const [response, skillsData, certificates] = await Promise.all([
    fetch("http://localhost:5000/api/get-data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }),

    fetch("http://localhost:5000/api/get-skills", {
      method: "GET",
    }),
    fetch("http://localhost:5000/api/certificates",{
      method:"GET"
    })
  ]);

  const data = await response.json();
  const skills = await skillsData.json();
const certificateData= await certificates.json()
  setMydata(data);
  setMyskills(skills);
  setCertificatesData(certificateData);

} catch (error) {
  console.error("Error fetching data:", error);
}
    }
    fetchData();
  },[]);
useEffect(() => {
  if (myData) {
    sendData(myData);
  }
}, [myData]);
  return (
    <div className=" lg:mt-15 bg-[#1a1a2e] 2xl:px-[600px]">
       <Hero userData={myData}/>
      <About userData={myData}/> 
      <Skills skills={myskills} />
      
      <Projects />
      <Certificate certificates={certificatesData}/>
<Contact userData={myData}/>

    </div>
  );
};

export default Home;