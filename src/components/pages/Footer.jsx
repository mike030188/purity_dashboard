import React from 'react';
import { Copyright, Items, MenuItems } from '../styles/Footer.style';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div style={{display: 'flex', width:'100%', justifyContent:'center', alignItems: 'center'}}>
        <Copyright>
            &copy; {1900 + new Date().getYear()},{" "}
            <span>Made with ❤️ by</span>
            <Link style={{color:'#4FD1C5', margin:'0 5px', textDecoration:'none'}}>Creative Tim</Link>
            <span>&</span>
            <Link style={{color:'#4FD1C5', margin:'0 5px', textDecoration:'none'}}>Simmmple</Link>
            <span>for a better web</span>
        </Copyright>
        <MenuItems>
            <Items>Creative Tim</Items>
            <Items>Simmmple</Items>
            <Items>Blog</Items>
            <Items>License</Items>
        </MenuItems>
    </div>
  )
}

export default Footer