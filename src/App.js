
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Portfolio } from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Home />
     <About />
     <Portfolio />
     <Contact />
    </div>
  );
}

export default App;
