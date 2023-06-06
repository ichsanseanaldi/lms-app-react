import styled from 'styled-components';


export const StyledButton = styled.button`

    padding: 20px;
    margin: 10px 0;
    border-radius:5px;
    font-weight:500;
    font-family:inherit;
    
    width:${props => props.width};
    color: ${props => props.color} ;
    background-color:${props => props.backgroundcolor};
    text-align:${props => props.textAlign};

    @media (max-width:800px){
        width:${props => props.main && '100%'};
    }

`