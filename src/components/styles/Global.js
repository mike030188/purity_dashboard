import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin:0;   
}

body{
    background: ${({theme})=> theme.colors.body};
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    padding: 0 18px;
}

p{
    color: var(--gray-gray-400, #A0AEC0);

}

img{
    max-width: 100%;
}
`

export default GlobalStyles