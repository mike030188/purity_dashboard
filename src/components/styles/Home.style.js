import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding:0 18px;
    border: 1px solid black;
`
export const CardWrap = styled.div`
    display: flex;
    justify-content:center;
    padding-top: 24px;
   
`
export const CardBox = styled.div`
    display: flex;    
    flex:1;
    align-items: center;  
    width:282px;
    height:80px;    
    padding: 0 20px;
    margin-right: ${({mg})=>mg || "24px"};
    border-radius: 15px;
    background: var(--black-amp-white-white, #FFF);
    box-shadow: 0px 3.500000238418579px 5.500000476837158px 0px rgba(0, 0, 0, 0.02);
`

export const Title = styled.div`
    display: flex;
    flex-direction:column;
    font-weight: 700;

    p{        
        font-size: 12px;
        line-height: 150%;
    }

    h4{
        color: var(--gray-gray-700, #2D3748);
        font-size: 18px;
        line-height: 140%;
    }

    h5{
        padding: 3px 0 0 10px;
        color: var(--green-green-400, #48BB78);
        font-size: 14px;
        line-height: 140%;
    }
`
export const FirstCard = styled.div`
    display: flex;
    flex:1;
    width: ${({wd})=>wd || "992px"};
    height: ${({hg})=>hg || "291px"};
    border:1px solid black;
`
