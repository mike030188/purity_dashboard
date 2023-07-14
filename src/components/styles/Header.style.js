import styled from 'styled-components';

export const NavItems = styled.div`
    display:flex;   
    align-items: center;
    height: 65px;
    width: 100%;    
    padding-top: 20px;
    background: ${({theme})=> theme.colors.header};
    /* border:1px solid black; */
`

export const Text = styled.div`
    flex: 1;
    padding-left: 48px;
    color: var(--gray-gray-400, #A0AEC0);    
    font-size: 12px;    
    font-weight: 400;
    line-height: 150%;

span{
    color: var(--gray-gray-700, #2D3748);
}
`

export const Register = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    flex: 1;
    padding-right: 29.5px;
    
    /* border: 1px solid black; */
    :hover{
        /* cursor:pointer; */
        color: #4FD1C5;
    }
`
export const SearchWrapper = styled.div`
    display: flex;
    width: 199px;
    height: 41.625px;
    align-items: center;
    border: 0.5px solid var(--gray-gray-200, #E2E8F0);
    border-radius: 15px;
    background-color: #FFF;
    
`
export const SearchInput = styled.input`
    border: none;
    background: transparent;
    color: var(--gray-gray-400, #A0AEC0);    
    font-size: 12px;    
    font-weight: 400;
    line-height: 150%;
   
`

