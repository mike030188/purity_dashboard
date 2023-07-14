import React from 'react'
import Header from '../header/Header'
import { CardBox, CardUp, Title, Wrapper } from '../styles/Home.style'
import { FaWallet } from 'react-icons/fa'

const Home = () => {
  return (
    
    <Wrapper>
      <Header />
      <h1>Dashboard</h1>
      <CardUp>
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
      </CardUp>
      
    </Wrapper>
  )
}

export default Home