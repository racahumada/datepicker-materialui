import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;    
`

export const WrapperControl = styled.div`
  max-width: 167px;  
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const WrapperCalendar = styled.div`
    display: ${({open}) => open ? 'block' : 'none'};
    width: 300px;
    margin-top: 5px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #f0f0f0;
`


