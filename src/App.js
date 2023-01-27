import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Bar from './pages/Bar/Bar';
import Canopy from './pages/Canopy/canopy';



function App() {
  return (
    <main className='App'> 
    <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Bar" element={<Bar />} />
      <Route path="/Canopy" element={<Canopy />} />
    </Routes>
    <Footer /> 
    </>
    </main>
  
  );
}

export default App;
