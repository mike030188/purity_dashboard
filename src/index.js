import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.style";
import Home from './components/pages/Home';
import Tables from './components/pages/Tables';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/sideBar/Sidebar';
import SignUp from './components/pages/SignUp';



const theme = {
  colors: {
    sidebar: "F8F9FA",
    header: "F8F9FA",
    body: "#F8F9FA",
    footer: "#F8F9FA",
  },
}

function App() {
  return(
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
          <div style={{display:'flex'}}>    
            <BrowserRouter>
              <MainApp />
            </BrowserRouter>
          </div>       
      </>
      
    </ThemeProvider>
    
  ) 
}

function MainApp() {
  
  const toLocate = useLocation();
  const loadingPage = toLocate.pathname === "/signin"
  const loadingPage1 = toLocate.pathname === "/signup"


  return(

    
    <React.Fragment>
      {!loadingPage && !loadingPage1 && <Sidebar/>}
      
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tables" element={<Tables/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />

        </Routes>
      
      
    </React.Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));

