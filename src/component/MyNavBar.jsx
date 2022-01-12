import React, { Component } from "react"
import { useState } from "react"
import {
  Navbar,
  Nav,
  Image,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap"
import { BsSearch, BsFillBellFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import netflix_logo from "../assets/netflix_logo.png"
import userprofile from "../assets/userprofile.png"

const MyNavBar = () => {
  const [selected, setSelected] = useState(false)
  const [query, setQuery] = useState("")

  const navigate = useNavigate()

  const submit = () => {
    navigate(`/tv-shows/${query}`)
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav"
      id="navbar"
    >
      <Navbar.Brand className="mr-0 ml-3" href="/">
        <Image
          className="p-0"
          src={netflix_logo}
          alt="netflix logo image"
          height={40}
          width={130}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="pr-3" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="pr-3" href="/tv-shows/friends">
            TV Shows
          </Nav.Link>
          <Nav.Link className="pr-3" href="/movies">
            Movies
          </Nav.Link>
          <Nav.Link className="pr-3" href="/recently-added">
            Recently Added
          </Nav.Link>
          <Nav.Link className="pr-3" href="my-list">
            My List
          </Nav.Link>
        </Nav>

        <Form inline style={{ visibility: selected ? "visible" : "hidden" }}>
          <FormControl
            type="text"
            placeholder="search..."
            className="mr-sm-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSubmit={(e) => submit()}
          />
        </Form>
        <Nav className="mr-3">
          <Nav.Link onClick={() => setSelected(!selected)}>
            <BsSearch className="iconss" />
          </Nav.Link>
          <Nav.Link href="#KIDS">KIDS</Nav.Link>

          <Nav.Link href="#notifications">
            <BsFillBellFill className="iconss" />
          </Nav.Link>

          <NavDropdown
            className="dropdown-menu-left"
            title={
              <Image
                className="thumbnail-image"
                src={userprofile}
                className="mr-1"
                width="32"
                alt="user pic"
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavBar
