import React from 'react';
import {BsHouseDoor, BsFillBarChartFill, BsCreditCard2BackFill, BsFillPersonFill} from 'react-icons/bs';
import {FaWrench, FaFile, FaRocket, FaQuestionCircle} from 'react-icons/fa';
import { AccPages, Button, Container, Dashboard, Documentation, Items, Logo, LogoWrapper } from '../styles/Sidebar';
import logo from '../../assets/images/logo.png';
import sidebarvector from '../../assets/images/SidebarVector.png';


const Sidebar = () => {
  return (
    <Container>
        <LogoWrapper>
            <Logo src={logo} alt=""/>
            <h1>PURITY UI DASHBOARD</h1>
        </LogoWrapper>
        <img src={sidebarvector} alt="line" style={{margin: '27.5px 0 22.5px'}}/>
        <Dashboard>
            <Items style={{color:'#2D3748'}}> <BsHouseDoor/>Dashboard</Items>
            <Items><BsFillBarChartFill/>Tables</Items>
            <Items><BsCreditCard2BackFill/>Billing</Items>
            <Items><FaWrench/>RTL</Items>
        </Dashboard>
        <h1>ACCOUNT PAGES</h1>
        <AccPages>
            <Items><BsFillPersonFill/>Profile</Items>
            <Items><FaFile/>Sign In</Items>
            <Items><FaRocket/>Sign Up</Items>
        </AccPages>
        <Documentation>
            <FaQuestionCircle style={{margin:'16px 0 21.5px'}}/>
            <h3>Need help?</h3>
            <p>Please check our docs</p>
            <Button>DOCUMENTATION</Button>
        </Documentation>
    </Container>
  )
}

export default Sidebar