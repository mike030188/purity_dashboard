import SignUpNav from "../header/SignUpNavbar";
import { Flex, MainFlex, SignUpWrapper } from "../styles/SignUp.style";


export default function SignUp () {
    return (    
        <SignUpWrapper>
            <div style={{padding:'0 490px'}}>
                {/*  <Flex></Flex> */}
                <MainFlex>
                    <SignUpNav/>
                    <div></div>
                    <div></div>
                    
                </MainFlex>
                {/* <Flex></Flex>  */} 
            </div>
                    
        </SignUpWrapper>      
        
    )
}