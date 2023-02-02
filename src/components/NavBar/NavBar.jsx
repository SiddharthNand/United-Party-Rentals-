import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import './NavBar.css';


export default function NavBar () {
    return (
        <>
        <Navbar bg="" expand="lg" className="navbar">
  <Navbar.Brand href="/"><img src="https://i.imgur.com/oIgfTxi.png" alt='logo' className='logo'></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Rentals" id="basic-nav-dropdown">
        <table>
          <tr>
          <td><NavDropdown.Item href="/bar" className='dropdown'>Bar & Beverage</NavDropdown.Item></td>
            <td><NavDropdown.Item href="/canopy" className='dropdown'>Canopy</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item href="/chairs" className='dropdown'>Chairs</NavDropdown.Item ></td>
            <td><NavDropdown.Item href="/china" className='dropdown'>China</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item href="/Concession" className='dropdown'>Concession</NavDropdown.Item></td>
            <td><NavDropdown.Item href="/Cookware" className='dropdown'>Cookware</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item href="/Decoration" className='dropdown'>Decoration</NavDropdown.Item></td>
            <td><NavDropdown.Item href="/Flatware" className='dropdown'>Flatware</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item href="/Glassware" className='dropdown'>Glassware</NavDropdown.Item></td>
            <td><NavDropdown.Item href="/Linen" className='dropdown'>Linen</NavDropdown.Item></td>
          
          </tr>
          <tr>
            <td><NavDropdown.Item href="/Misc" className='dropdown'>Misc</NavDropdown.Item></td>
            <td><NavDropdown.Item  href="/Serving" className='dropdown'>Serving</NavDropdown.Item></td>
          </tr>
            <td><NavDropdown.Item href="/Staging" className='dropdown'>Staging & Flooring</NavDropdown.Item></td>
            <td><NavDropdown.Item href="/Tables" className='dropdown'>Tables</NavDropdown.Item></td>
          <tr>
          </tr>
        </table>
      </NavDropdown>
      <Nav.Link href="/productgallery">Product Gallery</Nav.Link>
      <NavDropdown title="Company Info" id="basic-nav-dropdown">
        <NavDropdown.Item>Address: <a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">7232 Stockton Blvd. Sacramento, CA 95823</a></NavDropdown.Item>
        <NavDropdown.Item>Phone Number: <a href="tel:+19164248300">(916)424-8300</a></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <NavDropdown title="Preferred Partners" id="basic-nav-dropdown">
      <NavDropdown.Item><a href="https://www.menefeespace.com/" target="_blank" rel="noreferrer">Menefee Canvas Space</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

