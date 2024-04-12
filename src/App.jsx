import './App.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Servicesmenu from './Components/Servicesmenu';
import Marquee from './Components/marquee';



const App = () => { 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <Servicesmenu/>
    </>
  ); 
}

export default App
