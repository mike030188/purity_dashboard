import styled from 'styled-components';

export const Navbar = styled.div`
display: flex;
`
export const NavLeft = styled.div`
display: flex;
flex: 1;

h1{
    color: var(--secondary-primary-white, #FFF);
    font-size: 14px;
    font-weight: 700;
    line-height: 150%; /* 21px */
}
`

export const NavMid = styled.div`
display: flex;
flex: 2;
`
export const NavItems = styled.div`
display: inline-block;

`

export const NavRight =  styled.div`
display: flex;
flex: 1;
`