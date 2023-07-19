import React from 'react'
import Header from '../header/Header'
import { CardBox, CardWrap, FirstCard, Title, Wrapper } from '../styles/Home.style'
import { FaArrowRight, FaWallet } from 'react-icons/fa';
import chakra from "../../assets/images/chakra.png";

const Home = () => {
  return (
    
    <Wrapper>
      <Header />
      <h1>Dashboard</h1>
      <CardWrap head>
        <CardBox left>        
            <Title>
              <p>Today’s Money</p>
              <div style={{display: 'flex'}}>
                <h4>$53,000</h4>
                <h5>+55%</h5>
              </div>            
            </Title>
            <div style={{display: 'flex', flex:'1', justifyContent:'right'}}>
              <FaWallet 
              style={{
                      width:'22.5px',
                      height:'22.5px',                     
                      color:'#48BB78'}}/> 
            </div>        
        </CardBox>
        <CardBox mid1>        
            <Title>
              <p>Today’s Users</p>
              <div style={{display: 'flex'}}>
                <h4>$2,300</h4>
                <h5>+5%</h5>
              </div>            
            </Title>
            <div style={{display: 'flex', flex:'1', justifyContent:'right'}}>
              <FaWallet 
              style={{
                      width:'22.5px',
                      height:'22.5px',                     
                      color:'#48BB78'}}/> 
            </div>                   
        </CardBox>
        <CardBox mid2>        
            <Title>
              <p>New Clients</p>
              <div style={{display: 'flex'}}>
                <h4>$3,052</h4>
                <h5 style={{color:'red',}}>-14%</h5>
              </div>            
            </Title>
            <div style={{display: 'flex', flex:'1', justifyContent:'right'}}>
              <FaWallet 
              style={{
                      width:'22.5px',
                      height:'22.5px',                     
                      color:'#48BB78'}}/> 
            </div>       
        </CardBox>
        <CardBox right>        
            <Title>
              <p>Total Sales</p>
              <div style={{display: 'flex'}}>
                <h4>$173,000</h4>
                <h5>+8%</h5>
              </div>            
            </Title>
            <div style={{display: 'flex', flex:'1', justifyContent:'right'}}>
              <FaWallet 
              style={{
                      width:'22.5px',
                      height:'22.5px',                     
                      color:'#48BB78'}}/> 
            </div>      
        </CardBox>
      </CardWrap>
      <CardWrap mid >
        <FirstCard left>
          <div>
            <p>Built by developers</p>
            <h4>Purity UI Dashboard</h4>
            <p>From colors, cards, typography to complex elements,<br />
                you will find the full documentation.</p>
            <div>
              <h6>Read more</h6>
              <FaArrowRight/>  
            </div>
            
          </div>                  
        </FirstCard>
        <FirstCard right>
          <img src={chakra} alt="chakra" />        
        </FirstCard>          
      </CardWrap >
      
    </Wrapper>
  )
}

export default Home