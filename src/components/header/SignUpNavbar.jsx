import { Link } from "react-router-dom";
import { Button, Logo } from "../styles/Sidebar.style";
import { Items, NavItems, NavLeft, NavRight, Navbar } from "../styles/SignUpNav.style";
import logowhite from '../../assets/images/logo-white.png';
import { FaCube, FaUserCircle, FaKey } from "react-icons/fa";
import { BsFillPersonFill } from 'react-icons/bs'


export default function SignUpNav() {
    return(
        <Navbar>
            <NavLeft>
                <Logo src={logowhite} alt=""/>
                <h1>PURITY UI DASHBOARD</h1>
            </NavLeft>
            <NavItems>
                <Link to="/" style={{textDecoration:'none'}}>
                    <Items><FaCube style={{color:'#FFF', marginRight:'4px'}}/>DASHBOARD</Items>
                </Link>
                <Link to="/profile" style={{textDecoration:'none'}}>
                    <Items><BsFillPersonFill style={{color:'#FFF', marginRight:'4px'}}/>PROFILE</Items>
                </Link>
                <Link to="/signup" style={{textDecoration:'none'}}>
                    <Items><FaUserCircle style={{color:'#FFF', marginRight:'4px'}}/>SIGN UP</Items>
                </Link>
                <Link to="/signin" style={{textDecoration:'none'}}>
                    <Items><FaKey style={{color:'#FFF', marginRight:'4px'}}/>SIGN IN</Items>
                </Link>                
            </NavItems>
            <NavRight>
                <Button wd="150px" style={{borderRadius:'34.5px'}}>Free Download</Button>
            </NavRight>            
        </Navbar>
    )
} 