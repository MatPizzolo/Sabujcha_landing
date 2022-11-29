import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import './nav.css'
import { StaticImage } from 'gatsby-plugin-image';
import links from '../constants/links';
import 'bootstrap/dist/css/bootstrap.min.css';

// Problemas con los imports de react-bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 

const Navibar = ({toggleSidebar}) => {
    const [show, setShow] = useState(false);
        const showDropdown = (e)=>{
            setShow(!show);
        }
        const hideDropdown = e => {
            setShow(false);
        }
    return (
        <>
            <Navbar fixed="top" className="nav">
                <Container>
                    <Navbar.Brand href="#home"><StaticImage src="../../assets/imgs/logo1.png" alt="big image" placeholder="blurred" className="d-inline-block align-top "/></Navbar.Brand>
                    <div className="nav-links">
                    <Navbar.Collapse className="justify-content-end">
                        {
                            links.map((link => {
                                return (
                                    <Nav.Link href="#about" key={link.id} class="nav-links-only">{link.text}</Nav.Link>
                                )
                            }))
                        }
                        <div className="nav-link-bar"></div>
                        <NavDropdown title="USD" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action/3.1">$ USD</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">€ EUR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">£ GBP</NavDropdown.Item>
                        </NavDropdown>
                        <StaticImage src="../../assets/imgs/cart.svg" alt="cart" placeholder="blurred" className="ecom-cart"/>
                    </Navbar.Collapse>
                    </div>
                    <div className='nav-smallsize'>
                        <div className='currency-smallnav'>
                            <NavDropdown title="USD" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                <NavDropdown.Item href="#action/3.1">$ USD</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">€ EUR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">£ GBP</NavDropdown.Item>
                            </NavDropdown>  
                        </div>
                        <div className='cart-smallnav'>
                            <StaticImage src="../../assets/imgs/cart.svg" alt="cart" placeholder="blurred" className="ecom-cart"/> 
                        </div>
                        <div>
                            <button className="toggle-btn" onClick={toggleSidebar}>
                                <StaticImage src="../../assets/imgs/water.svg" alt="bside" placeholder="blurred" className="toggle-btn-img"/>
                            </button>   
                        </div>
                        
                    </div>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Navibar
