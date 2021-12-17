import React, { Component } from 'react'
import { Navbar, Nav, Image, NavDropdown, Form, FormControl} from 'react-bootstrap'
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import netflix_logo from '../assets/netflix_logo.png';
import userprofile from '../assets/userprofile.png';


class MyNavBar extends React.Component {
    
    state = {
        selected: false,
        searchQuery: ''
    }
    
    render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
            <Navbar.Brand className='mr-0 ml-3' href="#home"><Image className='p-0' src={netflix_logo} alt="netflix logo image" height={40} width={130}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className='pr-3' href="#features">Home</Nav.Link>
                <Nav.Link className='pr-3' href="#TV Shows">TV Shows</Nav.Link>
                <Nav.Link className='pr-3' href="#Movies">Movies</Nav.Link>
                <Nav.Link className='pr-3' href="#Recently Added">Recently Added</Nav.Link>
                <Nav.Link className='pr-3' href="#My List">My List</Nav.Link>

                </Nav>
                
                
                <Form inline style={{ visibility: this.state.selected ? 'visible' : 'hidden' }} >
                <FormControl type="text" placeholder="search..." className="mr-sm-2" value={this.state.searchQuery}  onChange={e => this.setState({ searchQuery: e.target.value })}/>
                </Form>
                <Nav className='mr-3'>
                

                <Nav.Link href="#searchbar" onClick={() => this.setState({ selected: !this.state.selected })}><BsSearch className='iconss'/></Nav.Link>
                <Nav.Link href="#KIDS">KIDS</Nav.Link>
                
                <Nav.Link href="#notifications"><BsFillBellFill className='iconss'/></Nav.Link>
                
                <NavDropdown className='dropdown-menu-left'
                title={<Image className="thumbnail-image" src={userprofile} className="mr-1" width="32" alt="user pic"/>} 
                id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
}

export default MyNavBar