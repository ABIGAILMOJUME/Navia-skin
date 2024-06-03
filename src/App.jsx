import './App.css'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ServicesMenu from './Components/ServicesMenu';
import Marquee from './Components/marquee';



const App = () => { 
  return (
    <>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <ServicesMenu/>
    </>
  ); 
}

export default App
