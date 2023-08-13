import styled from 'styled-components';

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '64px' : '3em'} ;
    position:relative ;
    z-index: 1;
    font-weight:800;
    letter-spacing:-2px;
    color:${props => props.backgroundcolor};

    @media (max-width:800px){
        font-size: ${props => props.landing && '50px'};
    }

    @media (max-width:500px){
        ${props => props.landing && `
            text-align:center;
        `};
    }

`
