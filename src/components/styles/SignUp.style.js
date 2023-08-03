import styled from "styled-components";
import signupBg from '../../assets/images/BgSignUp.png'

export const SignUpWrapper = styled.div`
background-image: url(${signupBg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 15px;
width: 100%;
height: 521px;
margin: 24px;
display: flex;
justify-content: center;
`
/* export const Flex = styled.div`
display: flex;
flex: 1;
` */
export const MainFlex = styled.div`
display: flex;
flex-direction: column;
flex: 2;
`
export const Flex = styled.div`
display: flex;
flex:1;
width:450px;
`