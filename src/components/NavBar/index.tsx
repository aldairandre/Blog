import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

const NavBar = () => {
    const link = {
        home: '/home',
        dasbordAdmin: '/dasbordAdmin',
        loginAdmin: '/loginAdmin'
    }
    return(
        <>
            <Header>
                <Logo>Logo</Logo>
                <Ul>
                    <Link to={link.home}><Li>Home</Li></Link>
                    <Link to={link.dasbordAdmin}><Li>Dasbord Admin</Li></Link>
                    <Link to={link.loginAdmin}><Li>Login Admin</Li></Link>    
                </Ul>            
            </Header>
            <Outlet/>
        </>
    )
}

const Header = styled.header`
    display: flex;
    padding: 10px 0;
    background: #000;
`
const Logo = styled.h1`
    color: #fff;
`

const Ul = styled.ul`

`

const Li = styled.li`

`

export default NavBar