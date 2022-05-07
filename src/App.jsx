import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Nav from './components/Nav';
import Contact from './components/Contact';
import AMH from './components/AMH';
import Scrollspy from 'react-ui-scrollspy';
import ScrollUp from './components/ScrollUp'
import './App.css';


function App() {
  return (
    <>
      <ScrollUp />
      <Nav />
      <Hero />
      <Scrollspy scrollThrottle={100}>
        <About />
        <Speakers />
        <AMH />
        <Contact />
      </Scrollspy>
    </>
  );
}

export default App;
