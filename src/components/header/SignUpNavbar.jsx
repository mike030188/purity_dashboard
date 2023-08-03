import { NavItems } from "../styles/AuthHeader.style";
import { Button, Logo } from "../styles/Sidebar.style";
import { NavLeft, NavMid, NavRight, Navbar } from "../styles/SignUpNav.style";
import logowhite from '../../assets/images/logo-white.png';


export default function SignUpNav() {
    return(
        <Navbar>
            <NavLeft>
                <Logo src={logowhite} alt=""/>
                <h1>PURITY UI DASHBOARD</h1>
            </NavLeft>
            <NavMid>
                <NavItems>
                    <a href="">DASHBOARD</a>
                    <a href="">PROFILE</a>
                    <a href="">SIGN IN</a>
                    <a href="">SIGN UP</a>
                </NavItems>
            </NavMid>
            <NavRight>
                <Button>Free Download</Button>
            </NavRight>
            
        </Navbar>
    )
} 