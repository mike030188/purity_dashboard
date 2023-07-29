import styled from 'styled-components';
import docBGimg from '../../assets/images/Background.png'

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
    width: 250px;
    height:100vh;    
    padding:38px 16px;
    line-height: 150%;
    background: ${({theme})=> theme.colors.sidebar};

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
    display: flex;
    align-items: center;
    color: var(--gray-gray-400, #A0AEC0);    
    font-size: 12px;    
    font-weight: 700;  
    cursor: pointer;
    padding: 15px 10px;    
    

    &:hover{
        border:1px solid #FFF;
        width: 219.5px;
        height: 54px;
        border-radius: 12px;
        background-color: #FFF;
        color: black;
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
    margin-bottom: 17px;
    font-size: 12px;    
    font-weight: 400;   
    color: var(--black-amp-white-white, #FFF); 
}
`
export const Button = styled.button`
    display:flex;
    width: ${({wd})=>wd || '186px'};
    height: ${({hg})=>hg || '37px'};
    background: ${({bg})=>bg || '#FFF'};
    color: ${({clr})=> clr || '#2D3748'};
    border-radius:12px;
    border: none;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;    
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;


&:hover{
    background-color: violet;
    color: var(--black-amp-white-white, #FFF);
    transition: 0.5s ease all;
}
`