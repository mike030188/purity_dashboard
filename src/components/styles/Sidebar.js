import styled from 'styled-components';
import docBGimg from '../../assets/images/Background.png'

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
    width: 250px;
    height:100vh;
    border: 1px solid red;
    padding:38px 16px;
    line-height: 150%;

h1{
    color: #2D3748;    
    font-size: 14px;    
    font-weight: 700;      
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
    cursor: pointer;

    &:hover{
        border:1px solid #FFF;
        width: 219.5px;
        height: 54px;
        border-radius: 12px;
        background-color: #FFF;
    }
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
    padding-left: 16px;
    color: var(--black-amp-white-white, #FFF);
    
h3{        
    font-size: 14px;    
    font-weight: 700;
    line-height: 140%;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: green;
    }
}

p{
    margin-bottom: 47px;
    font-size: 12px;    
    font-weight: 400;   
    color: var(--black-amp-white-white, #FFF); 
}
`
export const Button = styled.button`
    display:flex;
    width:186px;
    height:37px;
    border-radius:12px;
    border: none;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    background: var(--black-amp-white-white, #FFF);
    color: var(--gray-gray-700, #2D3748);
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;

&:hover{
    background-color: violet;
    color: var(--black-amp-white-white, #FFF);
}
`