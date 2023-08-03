import styled from 'styled-components';


export const Navbar = styled.div`
display: flex;
margin-top: 40px;
`

export const NavLeft = styled.div`
display: flex;
flex: 2;
align-items: center;

h1{
    color: var(--secondary-primary-white, #FFF);
    font-size: 14px;
    font-weight: 700;
    line-height: 150%; /* 21px */
}
`

export const NavItems = styled.div`
display: flex;
flex: 4;
justify-content: space-evenly;
align-items: center;
margin-right: 30px;
`

export const Items = styled.div`
color: var(--black-amp-white-white, #FFF);
text-align: center;
font-size: 10px;
font-weight: 700;
line-height: 150%; /* 15px */
`

export const NavRight =  styled.div`
display: flex;
flex: 1;
`

