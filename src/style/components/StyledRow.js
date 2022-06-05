import styled from 'styled-components';


export const StyledRow = styled.div`

    font-family:${props => props.title ? 'Poppins' : 'Caveat'}, sans-serif;
    font-size:${props => props.ordinal === 'st' || props.title ? '1.2rem' : '1rem'};
    background-color:${props => props.title ? '#303030' : props.backgroundcolor} ;
    color:${props => props.title ? 'white' : props.color} ;
    border-radius:10px;
    width:${props => props.title ? '100%' : props.width};
    padding: ${props => props.title ? '10px' : '5px'} 20px;
    margin: 5px auto ;
    user-select:none;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3) ;

`