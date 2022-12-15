import styled from 'styled-components';


export const StyledButton = styled.button`

    padding: 15px;
    margin: 10px 0;
    border-radius:5px;
    font-weight:700;
    font-family:'Roboto', sans-serif;
    
    width:${props => props.width};
    color: ${props => props.color} ;
    background-color:${props => props.backgroundcolor};
    text-align:${props => props.textAlign};
    border:${props=>props.main && '2px solid black'};

    @media (max-width:800px){
        width:${props => props.main && '50%'};
    }

`