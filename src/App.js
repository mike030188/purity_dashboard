import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Sidebar from "./components/pages/Sidebar";

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
        <Sidebar/>
        
      </>
    </ThemeProvider>
    
  );
}

export default App;
