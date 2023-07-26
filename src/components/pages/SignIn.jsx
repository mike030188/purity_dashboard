import React from 'react';
import { FormControl, Img, Main, RegisterWrap, SignInWrapper } from '../styles/SignIn.style';
import AuthHeader from '../header/AuthHeader';
import signInImage from '../../assets/images/signInImage.png'



const SignIn = () => {
  return (
    <Main>    
      <AuthHeader/> 
      <SignInWrapper>          
          <RegisterWrap>
            <h1>Welcome Back</h1>
            <p>Enter your email and password to sign in</p>
            <FormControl>
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Your email address'/>
            </FormControl>
          </RegisterWrap>  
          <Img src={signInImage} alt='chakra logo'/>              
      </SignInWrapper>
      
    </Main >
  )
}

export default SignIn