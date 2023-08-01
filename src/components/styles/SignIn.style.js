import styled from 'styled-components';

export const Main = styled.div`
display: flex;
flex: 3; 
flex-direction: column;
justify-content: center; 
width: 100%;

`
export const SignInWrapper = styled.div`      
display:flex;    
   
`
export const RegisterWrap = styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin-top: 282px;

h1{
    color: var(--teal-teal-300, #4FD1C5);
    font-size: 32px;
    font-weight: 700;
    line-height: 130%; /* 41.6px */
}

p{
    color: var(--gray-gray-400, #A0AEC0);
    font-size: 14px;
    font-weight: 700;
    line-height: 140%; /* 19.6px */
    padding: 8px 0 36px 0;
}
`

export const FormControl = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
font-weight: 400;
line-height: 140%; /* 19.6px */
margin-bottom: 24px;



label{
    color: var(--gray-gray-700, #2D3748);
}

input{
    color: var(--gray-gray-400, #A0AEC0);
    width: 350px;
    height: 50px;
    padding: 0px 20px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid var(--gray-gray-200, #E2E8F0);
    background: var(--black-amp-white-white, #FFF);

}
`

export const Img = styled.img`
display:flex;
flex:1;
width: 862px;
height: 872px;
margin-left: 239px;
border-radius: 0 0 0 25px;
`

export const ToggleSwitch = styled.div`
/* width: 100%; */
background-color: #fff;
display: flex;
align-items: center;
justify-content: left;
padding: 5px 0;
margin: 20px 0;

label{
background-color: #d2d2d2;
width: 36px;
height: 18px;
border-radius:200px;
cursor: pointer; 
margin-top:-1px;
position: relative;
}
label::before{
    position: absolute;
    content: '';
    background-color: #fff;
    width: 13.5px;
    height: 13.5px;
    border-radius: 200px;
    margin: 3px;
    transition: 0.2s;
}

input:checked + label {
    background-color: #4FD1C5;
  }

  input:checked + label::before {
    transform: translateX(17px);
    background-color: #fff;
  }
input{
    width:7px;
    height:4px;
    display: none;
}
`
