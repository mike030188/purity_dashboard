import React from 'react';
import {BsHouseDoor, BsFillBarChartFill, BsCreditCard2BackFill, BsFillPersonFill} from 'react-icons/bs';
import {FaWrench, FaFile, FaRocket} from 'react-icons/fa';
import { AccPages, Container, Dashboard, Documentation, Items, Logo, LogoWrapper } from '../styles/Sidebar';
import logo from '../../assets/images/logo.png';
import sidebarvector from '../../assets/images/SidebarVector.png';


const Sidebar = () => {
  return (
    <Container>
        <LogoWrapper>
            <Logo src={logo} alt=""/>
            <h1>PURITY UI DASHBOARD</h1>
        </LogoWrapper>
        <img src={sidebarvector} alt="line" />
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
            
        </Documentation>
    </Container>
  )
}

export default Sidebar
