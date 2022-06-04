import styled from 'styled-components';

export const StyledContainer = styled.div`

    max-width:90vw;
    margin: auto ;
    min-height:100vh ;
    /* background-color:blue; */

    display:${props => props.flex};
    flex-direction:${props => props.direction} ;
    justify-content:${props => props.justifyContent};
    align-items:${props => props.alignItems};


`