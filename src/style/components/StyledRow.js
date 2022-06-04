import styled from 'styled-components';


export const StyledRow = styled.div`

    font-family:${props => props.title ? 'Poppins' : 'Caveat'}, sans-serif;
    font-style:italic;
    background-color:${props => props.title ? '#111222' : props.backgroundcolor} ;
    color:${props => props.title ? 'white' : props.color} ;
    border-radius:10px;
    width:${props => props.title ? '100%' : props.width};
    padding: ${props => props.title ? '15px' : '5px'} 20px;
    margin: 15px auto ;

`