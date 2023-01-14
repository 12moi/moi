
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Skills />
  </main>
);
  
}

export default App;
