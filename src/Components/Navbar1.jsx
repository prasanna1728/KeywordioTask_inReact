import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CreateAds from './CreateAds';


function Navbar1() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand style={{ fontSize: "40px", fontWeight: "60px" }} >APP LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ fontSize: "30px", fontWeight: "40px", marginLeft: "720px" }}><Link to="/src/Components/Dashboard.jsx">DASHBOARD</Link></Nav.Link>



              <Nav.Link style={{ fontSize: "30px", fontWeight: "40px" }}><Link to="/src/Components/CreateAds.jsx">CREATE ADS</Link></Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >


    </>
  );
}
export default Navbar1;