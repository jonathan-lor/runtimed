import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, ResumeLink, /*NavBtnLink*/ } from './NavbarElements'
import { BsThreeDotsVertical } from 'react-icons/bs';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="App">
                        Runtimed
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BsThreeDotsVertical />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/Info">How to Use</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar