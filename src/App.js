import './index.css';
import Navbar from "./components/navbar";
import Header from './components/header';
import Features from './components/features';
import Offer from './components/offer';
import About from './components/about';
import Contact from './components/contact';
import Box from './components/boxes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Offer/>
      <Box/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
