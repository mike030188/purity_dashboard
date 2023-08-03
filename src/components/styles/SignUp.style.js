import styled from "styled-components";
import signupBg from '../../assets/images/BgSignUp.png'



export const SignUpWrapper = styled.div`
background-image: url(${signupBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 15px;
height: 521px;
display: flex;
justify-content: center;
margin: 18px 24px 0;

`

export const MainFlex = styled.div`
display: flex;
flex-direction: column;
`

export const Text = styled.div`
color: var(--black-amp-white-white, #FFF);
text-align: center;
margin: 65px 0;

h1{
    font-size: 32px;
    font-weight: 700;
    line-height: 130%; /* 41.6px */
}

p{
    color: var(--black-amp-white-white, #FFF);
    font-size: 14px;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    margin-top: 15px;
}
`
export const RegisterWrapper = styled.div`
display: flex;
flex-direction: column;


width: 453px;
height: 714px;
border-radius: 15px;
background: var(--black-amp-white-white, #FFF);
box-shadow: 0px 7px 23px 0px rgba(0, 0, 0, 0.05);

h1{
    font-size: 18px;
    font-weight: 700;
    line-height: 140%; /* 25.2px */
}
`