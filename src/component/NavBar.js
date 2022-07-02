// import { Nav, Navbar, Button } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="./.img/logo192.png" alt="bob"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        </>


        // <>
        //     <Navbar bg="light" expand="lg">            
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">
        //                     Another action
        //                 </NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">
        //                     Separated link
        //                 </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>          
        //     </Navbar>
        // </>
    )
}
export default NavBar