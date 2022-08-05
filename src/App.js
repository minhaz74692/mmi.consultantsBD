import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Works from "./components/Works"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/services/:id' element={<Services/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/works' element={<Works/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/servi' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
