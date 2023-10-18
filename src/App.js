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
import Contact from './pages/Contact/Contact';
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
import Auburn from './cities/Auburn/Auburn'
import Clarksburg from './cities/Clarksburg/Clarksburg'
import Courtland from './cities/Courtland/Courtland'
import Davis from './cities/Davis/Davis'
import Dixon from './cities/Dixon/Dixon'
import ElkGrove from './cities/ElkGrove/ElkGrove'
import Folsom from './cities/Folsom/Folsom'
import Galt from './cities/Galt/Galt'
import GraniteBay from './cities/GraniteBay/GraniteBay'
import Lincoln from './cities/Lincoln/Lincoln'
import Lodi from './cities/Lodi/Lodi'
import Loomis from './cities/Loomis/Loomis'
import RanchoCordova from './cities/RanchoCordova/RanchoCordova'
import Rocklin from './cities/Rocklin/Rocklin'
import Roseville from './cities/Roseville/Roseville'
import Sacramento from './cities/Sacramento/Sacramento'
import WalnutGrove from './cities/WalnutGrove/WalnutGrove'
import WestSacramento from './cities/WestSacramento/WestSacramento'
import Wilton from './cities/Wilton/Wilton'
import Woodland from './cities/Woodland/Woodland'























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
          <Route path='/Contact' element={<Contact />} />
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
          <Route path="/Auburn" element={<Auburn />} />
          <Route path="/Clarksburg" element={<Clarksburg />} />
          <Route path="/Courtland" element={<Courtland />} />
          <Route path="/Davis" element={<Davis />} />
          <Route path="/Dixon" element={<Dixon />} />
          <Route path="/ElkGrove" element={<ElkGrove />} />
          <Route path="/Folsom" element={<Folsom />} />
          <Route path="/Galt" element={<Galt />} />
          <Route path="/GraniteBay" element={<GraniteBay />} />
          <Route path="/Lincoln" element={<Lincoln />} />
          <Route path="/Lodi" element={<Lodi />} />
          <Route path="/Loomis" element={<Loomis />} />
          <Route path="/RanchoCordova" element={<RanchoCordova />} />
          <Route path="/Rocklin" element={<Rocklin />} />
          <Route path="/Roseville" element={<Roseville />} />
          <Route path="/Sacramento" element={<Sacramento />} />
          <Route path="/WalnutGrove" element={<WalnutGrove />} />
          <Route path="/WestSacramento" element={<WestSacramento />} />
          <Route path="/Wilton" element={<Wilton />} />
          <Route path="/Woodland" element={<Woodland />} />
          
















        </Routes>
        <Footer />
      </>
    </main>

  );
}
export default App;
