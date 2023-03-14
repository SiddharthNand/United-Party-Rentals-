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
// import Contact from './pages/Contact/Contact';
import Cookware from './pages/Cookware/Cookware';
import Gallery from './pages/Gallery/Gallery'
import ProductGallery from './pages/ProductGallery/ProductGallery'
import Decoration from './pages/Decoration/Decoration';
import Flatware from './pages/Flatware/Flatware';
import Glassware from './pages/Glassware/Glassware';
import Linen from './pages/Linen/Linen';
import Misc from './pages/Misc/Misc';
import Serving from './pages/Serving/Serving';
import Staging from './pages/Staging/Staging';
import Tables from './pages/Tables/Tables';
import Vendors from './pages/Vendors/Vendors';





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
          {/* <Route path='/Contact' element={<Contact />} /> */}
          <Route path="/Cookware" element={<Cookware />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ProductGallery" element={<ProductGallery />} />
          <Route path="/Decoration" element={<Decoration />} />
          <Route path="/Flatware" element={<Flatware />} />
          <Route path="/Glassware" element={<Glassware />} />
          <Route path="/Linen" element={<Linen />} />
          <Route path="/Misc" element={<Misc />} />
          <Route path="/Serving" element={<Serving />} />
          <Route path="/Staging" element={<Staging />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Vendors" element={<Vendors />} />

        </Routes>
        <Footer />
      </>
    </main>

  );
}
export default App;
