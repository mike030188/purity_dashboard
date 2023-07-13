import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.style";
import Header from "./components/pages/Header";


const theme = {
  colors: {
    sidebar: "#F8F9FA",
    header: "#F8F9FA",
    body: "#F8F9FA",
    footer: "#F8F9FA",
  },
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Header/>      

        
      </>
    </ThemeProvider>
    
  );
}

export default App;
