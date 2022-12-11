import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar/navbar';
import {Home} from "./Component/Home"
import About from './Component/About';
import Skill from './Component/Skills';
import Tools from './Component/tools';
import Project from './Component/Project';
import Contact from './Component/Contact';
import {Link} from "react-scroll"
import Stats from './Component/stats';
// import pic from "./logo512.png"

function App() {
  return (
    <div>
      {/* <img src={profile_pic}/> */}
    <Navbar/>
    {/* <Link to="about" color='white'>About</Link> */}

    <Home/>
    <About/>
    <Skill/>
    {/* <Tools/> */}
    <Project/>
    <Stats/>
    <Contact/>
    </div>
  );
}

export default App;
