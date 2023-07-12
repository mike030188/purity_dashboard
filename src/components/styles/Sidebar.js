import styled from 'styled-components';
import docBGimg from '../../assets/images/Background.png'

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
    width: 250px;
    height:100vh;
    border: 1px solid red;
    padding:38px 16px;

h1{
    color: #2D3748;    
    font-size: 14px;    
    font-weight: 700;
    line-height: 150%;
    
}   
`

export const LogoWrapper = styled.div`
    display: flex;
`
export const Logo = styled.img`
    width: 22px;
    height: 23px;
    margin-right: 12px;
    
`

export const Dashboard = styled.div`
    display:flex;
    flex-direction: column;
    
`

export const Items = styled.div`
    color: var(--gray-gray-400, #A0AEC0);    
    font-size: 12px;    
    font-weight: 700;
    line-height: 150%;
`

export const AccPages = styled.div`
    display:flex;
    flex-direction: column;
`
export const Documentation = styled.div`
    background-image: url(${docBGimg});
    background-repeat: no-repeat;
    height:170px;
    width:218px;
    
`