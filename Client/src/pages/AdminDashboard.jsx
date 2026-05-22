import react from 'react'
import AdminNavbar from "../admin/AdminNavbar.jsx"
import {useState,useEffect} from "react"
import Profile from "../admin/content/Profile";
import Skills from "../admin/content/Skills";
import Projects from "../admin/content/Projects";
import Certifications from "../admin/content/Certifications";
import Timeline from "../admin/content/Timeline.jsx";
import Sidebar from "../admin/Sidebar.jsx"
const Dashboard=()=>{
    const [activeSection, setActiveSection] = useState("Profile");
  const [myData,setMydata]=useState({});
  const [myskills,setMyskills]=useState([]);
  const [certificatesData,setCertificatesData]=useState([]);
  const [myProjectsData,setMyProjectsData]=useState([]);
    
  useEffect(() => {
    const fetchData=async()=>{
      try {
  const [response, skillsData, certificates,projects] = await Promise.all([
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
    }),
    fetch("http://localhost:5000/api/projects",{
      method:"GET"
    })
  ]);

  const data = await response.json();
  const skills = await skillsData.json();
const certificateData= await certificates.json()
const projectsData= await projects.json();
  setMydata(data);
  setMyskills(skills);
  setCertificatesData(certificateData);
  setMyProjectsData(projectsData);

} catch (error) {
  console.error("Error fetching data:", error);
}
    }
    fetchData();
  },[]);
  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return <Profile userData={myData} />;

      case "Timeline":
        return <Timeline userData={myData}/>;

      case "Skills":
        return <Skills skills={myskills} />;

      case "Projects":
        return <Projects  projectData={myProjectsData}/>;

      case "Certifications":
        return <Certifications  certificateData={certificatesData}/>;

      default:
        return <Timeline userData={myData}/>;
    }
  };
    return(
        <div className="bg-[#1a1a2e]">
            <AdminNavbar/>
           <div className="flex">
            <Sidebar
          active={activeSection}
          setActive={setActiveSection}
        />
          <div className="flex-1 p-6">
          {renderSection()}
        </div>
           </div>
            
        </div>
    )
}
export default Dashboard