import React from 'react'
import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
import { BsFillGridFill, BsList } from "react-icons/bs";
import './Header.css'



const Header = () => {
    return (
        
            <div className='d-flex pt-3 ml-5 pr-0 mr-5 header'>
                
                <div className='pr-4'>
                    <h2>
                        <b>TV SHOWS</b>
                    </h2>
                </div>
                <div className='align-bottom'>
                    <DropdownButton id="dropdown-basic-button" title="Genres" className='headerdrop'>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
                    </DropdownButton>
                </div>
                
                <div id="card-buttons" className='ml-auto d-flex justify-content-between align-items-bottom '>
                    <div className="btn-group">
                    
                    <Button type="button" className='btn btn-sm btn-outline-secondary showcase d-flex align-items-center' onclick="">
                        <BsList className='iconss'/>
                    </Button>
                    <Button type="button" className='btn btn-sm btn-outline-secondary showcase d-flex align-items-center' onclick="">
                        <BsFillGridFill className='iconss'/>
                    </Button>
                    </div>  
                </div>  
            </div>
        
    )
}

export default Header