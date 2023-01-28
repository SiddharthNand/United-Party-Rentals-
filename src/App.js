import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';
import Bar from './pages/Bar/Bar';
import Canopy from './pages/Canopy/canopy';
import Chairs from './pages/Chairs/Chairs';
import China from './pages/China/China';
import Concession from './pages/Concession/Concession';
import Cookware from './pages/Cookware/Cookware';



function App() {
  return (
    <main className='App'> 
    <>
    <NavBar />
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Bar" element={<Bar />} />
      <Route path="/Canopy" element={<Canopy />} />
      <Route path="/Chairs" element={<Chairs />} />
      <Route path="/China" element={<China />} />
      <Route path="/Concession" element={<Concession />} />
      <Route path="/Cookware" element={<Cookware />} />
    </Routes>
    <Footer /> 
    </>
    </main>
  
  );
}
export default App;
