
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Home />
     <About />
     <Portfolio />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
