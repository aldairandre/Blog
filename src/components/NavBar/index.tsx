import { Link, Outlet } from "react-router-dom"
import { FiMenu } from 'react-icons/fi'
import styled from "styled-components"
import { useState } from "react"
import {logOut} from '../../services/auth'

const NavBar = () => {
    const [actMenuMobile, setActMenuMobile] = useState(false) 
    const link = {
        home: '/home',
        dasbordAdmin: '/dasbordAdmin',
        loginAdmin: '/signin',
        signup: '/signup',
        modal: '/modal'
    }
    return(
        <>
            <Header>
                <Logo>Logo</Logo>
                <Nav>
                    <MenuMobileIcon>
                        <FiMenu size={35} onClick={() => setActMenuMobile(!actMenuMobile)}/>
                    </MenuMobileIcon>
                    <Ul actMenuMobile={actMenuMobile}>
                        <Li>
                            <Link to={link.signup}>Signup</Link>
                        </Li>
                        <Li>
                            <Link to={link.home}>Home</Link>
                        </Li>
                        <Li>
                            <Link to={link.dasbordAdmin}>Dasbord Admin</Link>
                        </Li>
                        <Li>
                            <Link to={link.loginAdmin}>Login Admin</Link>
                        </Li> 
                        <Li>
                            <button
                                onClick={logOut}
                            >
                                Log Out
                            </button>
                        </Li>
                    </Ul>        
                </Nav>        
            </Header>
            <Outlet/>
        </>
    )
}

//Style

const Header = styled.header`
    display: flex;
    max-height: 59px;
    padding: 10px 20px;
    background: #000;
    justify-content:space-between;
    align-items:baseline;
    @media(max-width:768px){
        align-items:flex-start;
    }
`
const Logo = styled.h1`
    color: #fff;
    cursor:pointer;
`
const Nav = styled.nav`
    width: 24%;
    display:flex;
    align-items:baseline;
    justify-content:space-between;
    @media(max-width:768px){
        justify-content: flex-end;
    }
`

const Ul = styled.ul<{actMenuMobile:boolean}>`
    width: 100%;
    display:flex;
    list-style-type: none;
    align-items:baseline;
    justify-content:space-between;
    @media(max-width:768px){
        z-index:1000;
        position:absolute;
        left:0;
        top:11.4%;
        width:50%;
        padding:10px 0;
        height:88.6vh;
        flex-direction:column;
        align-items:center;
        transition: display 10s ease;
        background:#9A36BD;
        display:${({actMenuMobile}) => (actMenuMobile ? 'flex':'none')};
    }
`

const Li = styled.li`
    a {
        color:#fff;
        text-decoration:none;
        :active {
            color:#f1f;
        }
    }
`

const MenuMobileIcon = styled(Li)`
    display: none;
    color:#fff;
    @media(max-width:768px){
        display: block;
    }
`

export default NavBar