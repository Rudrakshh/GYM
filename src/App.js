import './index.css';
import Navbar from "./components/navbar";
import Header from './components/header';
import Features from './components/features';
import Offer from './components/offer';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
