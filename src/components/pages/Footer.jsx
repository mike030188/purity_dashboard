import React from 'react';
import { Copyright, Items, MenuItems } from '../styles/Footer.style';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div style={{display: 'flex', width:'100%'}}>
        <Copyright>
            &copy; {1900 + new Date().getYear()},{" "}
            <span>Made with ❤️ by</span>
            <Link style={{color:'#4FD1C5', margin:'0 5px', textDecoration:'none'}}>Creative Tim</Link>
            <span>&</span>
            <Link style={{color:'#4FD1C5', margin:'0 5px', textDecoration:'none'}}>Simmmple</Link>
            <span>for a better web</span>
        </Copyright>
        <MenuItems>
            <Items style={{marginRight:'44px'}}>Creative Tim</Items>
            <Items style={{marginRight:'44px'}}>Simmmple</Items>
            <Items style={{marginRight:'44px'}}>Blog</Items>
            <Items>License</Items>
        </MenuItems>
    </div>
  )
}

export default Footer