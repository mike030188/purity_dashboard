import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* width:988px; */
    height:70px;    
    border-radius: 15px;
    border: 1.5px solid #FFF;    
    background: linear-gradient(137deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.80) 100%);
    box-shadow: 0px 7.000000476837158px 23.000001907348633px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10.500000953674316px);
    
    margin-top: ${({mgt})=>mgt || '-848px'};
    margin-right: ${(props)=>props.signin ? '300px' : '0px'};
    padding: 14px;
    
    
    

    

    h1{
        color: #2D3748;
        font-size: 14px;
        font-weight: 700;
        line-height: 150%; /* 21px */
    }
    `

    export const NavMenu = styled.div`
    display:flex;
    flex:2;
    justify-content: center;
    
    `

    export const NavItems = styled.div`
    display: flex;
    align-items: center;
    color: #2D3748;    
    font-size: 14px;    
    font-weight: 700;  
    cursor: pointer;
    padding: 15px 10px; 
    
    `