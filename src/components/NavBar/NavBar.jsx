import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import './NavBar.css';


export default function NavBar () {
    return (
        <>
        <Navbar bg="" expand="lg">
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
            <td><NavDropdown.Item className='dropdown'>Decoration</NavDropdown.Item></td>
            <td><NavDropdown.Item className='dropdown'>Flatware</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item className='dropdown'>Glassware</NavDropdown.Item></td>
            <td><NavDropdown.Item className='dropdown'>Labor</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item className='dropdown'>Linen</NavDropdown.Item></td>
            <td><NavDropdown.Item className='dropdown'>Misc</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item className='dropdown'>Serving</NavDropdown.Item></td>
            <td><NavDropdown.Item className='dropdown'>Staging & Flooring</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item className='dropdown'>Tables</NavDropdown.Item></td>
          </tr>
        </table>
      </NavDropdown>
      <NavDropdown title="Company Info" id="basic-nav-dropdown">
        <NavDropdown.Item>Address: <a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">7232 Stockton Blvd. Sacramento, CA 95823</a></NavDropdown.Item>
        <NavDropdown.Item>Phone Number: <a href="tel:+19164248300">(916)424-8300</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

