import styled from 'styled-components';

export const StyledContainer = styled.div`

    margin: auto ;
    min-height:100vh ;
    max-width:1200px;

    display:${props => props.flex};
    flex-direction:${props => props.direction} ;
    justify-content:${props => props.justifyContent};
    align-items:${props => props.alignItems};

    @media (max-width:1000px){
        min-width:100vw ;
        padding:0 10px ;
        flex-direction:${props => props.admin ? 'column' : 'row'} ;
    }

`