import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Navbar.Brand href="/">
        <img
          src="https://i.imgur.com/59MnZ2J.png"
          alt="Logo"
          className="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/">Home</Nav.Link>
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
                  <td><NavDropdown.Item href="/Serving" className='dropdown'>Serving</NavDropdown.Item></td>
                </tr>
                <td><NavDropdown.Item href="/Staging" className='dropdown'>Staging & Flooring</NavDropdown.Item></td>
                <td><NavDropdown.Item href="/Tables" className='dropdown'>Tables</NavDropdown.Item></td>
                <tr>
                </tr>
              </table>
            </NavDropdown>
            <NavDropdown title="Areas We Serve" id="basic-nav-dropdown">
              <table>
                <tr>
                  <td><NavDropdown.Item href="/Auburn" className='dropdown'>Auburn, CA</NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Clarksburg" className='dropdown'>Clarksburg, CA</NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Courtland" className='dropdown'>Courtland, CA</NavDropdown.Item ></td>
                  <td><NavDropdown.Item href="/Davis" className='dropdown'>Davis, CA</NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Dixon" className='dropdown'>Dixon, CA
                  </NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/ElkGrove" className='dropdown'>Elk Grove, CA
                  </NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Folsom" className='dropdown'>Folsom, CA
                  </NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Galt" className='dropdown'>Galt, CA
                  </NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/GraniteBay" className='dropdown'>Granite Bay, CA</NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Lincoln" className='dropdown'>Lincoln, CA</NavDropdown.Item></td>

                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Lodi" className='dropdown'>Lodi, CA</NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Loomis" className='dropdown'>Loomis, CA</NavDropdown.Item></td>
                </tr>
                <td><NavDropdown.Item href="/RanchoCordova" className='dropdown'>Rancho Cordova, CA
                </NavDropdown.Item></td>
                <td><NavDropdown.Item href="/Rocklin" className='dropdown'>Rocklin, CA
                </NavDropdown.Item></td>
                <tr>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Roseville" className='dropdown'>Roseville, CA
                  </NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Sacramento" className='dropdown'>Sacramento, CA
                  </NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/WalnutGrove" className='dropdown'>Walnut Grove, CA
                  </NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/WestSacramento" className='dropdown'>West Sacramento, CA</NavDropdown.Item></td>
                </tr>
                <tr>
                  <td><NavDropdown.Item href="/Wilton" className='dropdown'>Wilton, CA</NavDropdown.Item></td>
                  <td><NavDropdown.Item href="/Woodland" className='dropdown'>Woodland, CA</NavDropdown.Item></td>
                </tr>
              </table>
            </NavDropdown>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/Vendors">Preferred Vendors</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}