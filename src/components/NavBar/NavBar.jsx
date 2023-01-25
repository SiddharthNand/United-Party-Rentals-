import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import './NavBar.css';


export default function NavBar () {
    return (
        <>
        <Navbar bg="" expand="lg">
  <Navbar.Brand href="#">United Party Rentals</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Rentals" id="basic-nav-dropdown" >
        <table>
          <tr>
            <td><NavDropdown.Item>Bar & Beverage</NavDropdown.Item></td>
            <td><NavDropdown.Item>Canopy</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Chairs</NavDropdown.Item></td>
            <td><NavDropdown.Item>China</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Concession</NavDropdown.Item></td>
            <td><NavDropdown.Item>Cookware</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Decoration</NavDropdown.Item></td>
            <td><NavDropdown.Item>Flatware</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Glassware</NavDropdown.Item></td>
            <td><NavDropdown.Item>Labor</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Linen</NavDropdown.Item></td>
            <td><NavDropdown.Item>Misc</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Serving</NavDropdown.Item></td>
            <td><NavDropdown.Item>Staging & Flooring</NavDropdown.Item></td>
          </tr>
          <tr>
            <td><NavDropdown.Item>Tables</NavDropdown.Item></td>
          </tr>
        </table>
      </NavDropdown>
      <NavDropdown title="Company Info" id="basic-nav-dropdown">
        <NavDropdown.Item><a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">Address: 7232 Stockton Blvd. Sacramento, CA 95823</a></NavDropdown.Item>
        <NavDropdown.Item>Phone Number: (916)424-8300</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </>
    )
}

