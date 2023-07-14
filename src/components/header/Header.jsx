import React from 'react';
import { SearchInput, NavItems, Register, Text, SearchWrapper,  } from '../styles/Header.style';
import {FaUserTie, FaRegSun, FaRegBell} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai'; 
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <NavItems>        
        <Text>Pages <span>/ Dashboard</span></Text>
        <Register>
            <SearchWrapper>
                <AiOutlineSearch style={{margin:'6px'}}/>
                <SearchInput href="" placeholder="Type here..."></SearchInput>
            </SearchWrapper>
            <FaUserTie/>
            <Link to="/signin" style={{textDecoration: 'none'}}>
            <p>Sign in</p>
            </Link>            
            <FaRegSun/>
            <FaRegBell/>
        </Register>        
    </NavItems>
  )
}

export default Header