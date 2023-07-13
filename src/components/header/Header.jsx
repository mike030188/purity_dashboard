import React from 'react';
import { SearchInput, NavItems, Register, Text, SearchWrapper,  } from '../styles/Header.style';
import {FaUserTie, FaRegSun, FaRegBell} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai'; 


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
            <p>Sign in</p>
            <FaRegSun/>
            <FaRegBell/>
        </Register>        
    </NavItems>
  )
}

export default Header