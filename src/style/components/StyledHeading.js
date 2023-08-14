import styled from 'styled-components';
import { magenta, pink, yellow } from '../ColorVariable';

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '64px' : '3em'} ;
    position:relative ;
    z-index: 1;
    font-weight:800;
    letter-spacing:-2px;
    color:${props => props.backgroundcolor};
    text-shadow:${props=>props.landing? '3px 3px white, 6px 6px #F24C4C' :'4px 4px #202020'};

    @media (max-width:800px){
        font-size: ${props => props.landing && '50px'};
    }

    @media (max-width:500px){
        ${props => props.landing && `
            text-align:center;
        `};
    }

`
