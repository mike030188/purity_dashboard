import React from 'react';
import { Chakra, Img, MainWrap, SignInNavbar, SignInWrap } from '../styles/SignIn.style';
import { BackgroundImg } from '../styles/SignIn.style';
import logo_chakra_2x from '../../assets/images/logo_chakra_2x.png';
import logo_chakra_2x_1 from '../../assets/images/logo_chakra_2x_1.png';
import logo_chakra_2x_2 from '../../assets/images/logo_chakra_2x_2.png';
import { Register } from '../styles/Header.style';

const SignIn = () => {
  return (
    <SignInWrap>   
      <div style={{display:'flex', justifyContent: 'center'}}>
        <SignInNavbar>

        </SignInNavbar>
      </div>
      <div style={{display:'flex', justifyContent: 'right'}}>
        <BackgroundImg>          
          <img src={logo_chakra_2x_1} alt=""/>
          <img src={logo_chakra_2x_2} alt="" style={{marginLeft:'-862px'}} />          
        </BackgroundImg>
      </div>
      
      
      <MainWrap style={{display:'flex'}}>
        <Register>
          <h1>signIn</h1>
        </Register>
        <Chakra>
          <Img src={logo_chakra_2x} alt="" />
        </Chakra>
        
      </MainWrap>
      
      
    </SignInWrap>
  )
}

export default SignIn