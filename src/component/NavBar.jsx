/* eslint-disable react/prop-types */
import { Navbar, Nav } from "react-bootstrap";

function NavBar({setCategory}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <i className="fa-regular fa-newspaper" width="30" height="30"></i>
          {" "}
          News App
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link className="nav-link"  onClick={()=>setCategory("technology")}>Technology</Nav.Link>
          <Nav.Link className="nav-link" onClick={()=>setCategory("business")}>Business</Nav.Link>
          <Nav.Link className="nav-link" onClick={()=>setCategory("health")}>Health</Nav.Link>
          <Nav.Link className="nav-link" onClick={()=>setCategory("sports")}>Sports</Nav.Link>
          <Nav.Link className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
