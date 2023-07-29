import React from 'react';
import { FormControl, Img, Main, RegisterWrap, SignInWrapper, ToggleSwitch } from '../styles/SignIn.style';
import AuthHeader from '../header/AuthHeader';
import signInImage from '../../assets/images/signInImage.png'
import { Button } from '../styles/Sidebar.style';
import { Link } from 'react-router-dom';



const SignIn = () => {
  return (
    <Main>           
      <SignInWrapper>          
          <RegisterWrap>
            <h1>Welcome Back</h1>
            <p>Enter your email and password to sign in</p>
            <FormControl>
              <label htmlFor="">Email</label>
              <input type="email" id='email' name='email' placeholder='Your email address'/>
              <label htmlFor="" style={{marginTop:'24px'}}>Password</label>
              <input type="password" placeholder='Your password'/>
            </FormControl>
            <div style={{display:'flex', alignItems: 'center'}}>
              <ToggleSwitch>
              <input type="checkbox" checked/>
              <span class="slider round"></span>              
              </ToggleSwitch>
              <label htmlFor="">Remember me</label>
            </div>
            <Button wd='350px' hg='45px' bg='#4FD1C5' 
                style={{marginTop: '36.5px', 
                        color:'white',
                        marginBottom: '22px'
                        }}>Sign In</Button>
            <p style={{marginLeft:'70px'}}>Don't have an account? <Link style={{color:'#4FD1C5', textDecoration:'none'}}>Sign up</Link></p>
          </RegisterWrap>  

          <Img src={signInImage} alt='chakra logo'/>              
      </SignInWrapper>

      <AuthHeader/>
      <h1 style={{marginTop:'900px'}}>Salom</h1>
    </Main >
  )
}

export default SignIn