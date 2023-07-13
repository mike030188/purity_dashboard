import React from 'react';
import { SearchInput, Nav, Register, Text, SearchWrapper } from '../styles/Header.style';
import {AiOutlineSearch} from 'react-icons/ai';

const Header = () => {
  return (
    <Nav>        
        <Text>Pages <span>/ Dashboard</span></Text>
        <Register>
            <SearchWrapper>
                <AiOutlineSearch/>
                <SearchInput href="" placeholder="Home"></SearchInput>
            </SearchWrapper>
            
        </Register>        
    </Nav>
  )
}

export default Header