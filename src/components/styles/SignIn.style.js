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
position: relative;
display: inline-block;
width: 36px;
height: 19px;
margin-right: 15px;

  input{
    opacity: 0;
    width: 0;
    height: 0;
  }

 /* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
} 

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: -5px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #48BB78;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`
