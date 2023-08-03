import { Link } from "react-router-dom";
import SignUpNav from "../header/SignUpNavbar";
import { Button } from "../styles/Sidebar.style";
import { FormControl, ToggleSwitch } from "../styles/SignIn.style";
import { MainFlex, RegisterWrapper, SignUpWrapper, Text } from "../styles/SignUp.style";
import Footer from './Footer';



export default function SignUp () {
    return (    
        <div style={{width:'100%', height:'100vh'}}>
            <SignUpWrapper> 
            </SignUpWrapper>   
                <div style={{marginTop:'-500px', padding:'0 450px 52px'}}>
                    <MainFlex>
                        <SignUpNav/>
                        <Text>
                            <h1>Welcome!</h1>
                            <p>Use these awesome forms to login or create new <br/>
                            account in your project for free.</p>
                        </Text>   
                        <div style={{display: 'flex', justifyContent: 'center', marginBottom:'66px'}}>
                        <RegisterWrapper style={{display:'flex', justifyContent:"space-evenly", padding:'45px 51px'}}>
                            <h1>Register with</h1>
                            <div>

                            </div>
                            <p>or</p>
                        <FormControl>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Your full name'/>
                            <label htmlFor="" style={{marginTop:'18px'}}>Email</label>
                            <input type="email" id='email' name='email' placeholder='Your email address'/>
                            <label htmlFor="" style={{marginTop:'18px'}}>Password</label>
                            <input type="password" placeholder='Your password'/>
                        </FormControl>
                        <div style={{display:'flex', alignItems: 'center'}}>
                            <ToggleSwitch>
                            <input type="checkbox" id='checked'/>
                            <label for="checked"></label>              
                            </ToggleSwitch>
                            <label htmlFor="" style={{marginLeft:'10px'}}>Remember me</label>
                        </div>
                        <Button wd='350px' hg='45px' bg='#4FD1C5' 
                            style={{marginTop: '36.5px', 
                                    color:'white',
                                    marginBottom: '22px',
                                    fontSize:'18px'
                                    }}>Sign Up</Button>
                        <p style={{marginLeft:'70px'}}>Already have an account? <Link to='/signup' style={{color:'#4FD1C5', textDecoration:'none'}}>Sign in</Link></p>
                        </RegisterWrapper>
                        </div>                     
                        <Footer />                                     
                    </MainFlex>                   
                   
                </div>       
                                   
            
        </div>
            
             
        
                
    )
}