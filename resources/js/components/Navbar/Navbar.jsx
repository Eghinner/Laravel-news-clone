import React from 'react'
import { Nav, Logo, Links, Input, Button } from './Navbar.styled'
import { FaCaretDown, FaPowerOff, FaUser, FaSearch, IoCloseSharp } from 'react-icons/fa'

const Navbar = () => {
	return (
		<Nav id="navigation">
		  <Logo href="#" className="logo">POSTMAN<span>GO</span></Logo>
		  <Links className="links">
		    <li>
		    	<Input type="text" placeholder="Search..."/>
		    	<Button type="submit"><FaSearch /></Button>
		    </li>
		    <li className="dropdown"><a href="#" className="trigger-drop"><FaUser /> Account<FaCaretDown /></a>
		      <ul className="drop">
		        <li><a href="#"><FaPowerOff /> LogOut</a></li>
		        <li><a href="#">LogIn</a></li>
		        <li><a href="#">Register</a></li>
		      </ul>
		    </li>
		  </Links>
		</Nav>
	)
}

export default Navbar