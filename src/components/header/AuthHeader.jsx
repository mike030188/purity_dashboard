import { Button, Logo, LogoWrapper } from "../styles/Sidebar.style";
import logo from '../../assets/images/logo.png';
import { NavItems, NavMenu, NavbarWrapper } from "../styles/AuthHeader.style";
import { Link } from "react-router-dom";
import { FaFile, FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

export default function AuthHeader() {
    return (        
        <NavbarWrapper>
            <LogoWrapper style={{flex:'1'}}>
                <Logo src={logo} alt="" width="22px" height="23px"/>
                <h1>PURITY UI DASHBOARD</h1>
            </LogoWrapper>
            <NavMenu>
                <Link to="/" style={{textDecoration:'none'}}>
                    <NavItems><FaHome style={{marginRight:'10px'}}/>Dashboard</NavItems>
                </Link>
                <Link  to="/profile" style={{textDecoration:'none'}}>
                    <NavItems><BsFillPersonFill style={{marginRight:'10px'}}/>Profile</NavItems>
                </Link>
                <Link  to="/signup" style={{textDecoration:'none'}}>
                    <NavItems><FaFile style={{marginRight:'10px'}}/>Sign Up</NavItems>
                </Link> 
                <Link  to="/signin" style={{textDecoration:'none'}}>
                    <NavItems><FaFile style={{marginRight:'10px'}}/>Sign In</NavItems>
                </Link> 
            </NavMenu>
            <Button bg='black' clr='white' hg='35px' wd='134px' style={{flex:'1', fontSize:'16px', borderRadius:'50px'}}>Free Download</Button>
        </NavbarWrapper>        
    )
}