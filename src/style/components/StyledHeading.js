import styled from 'styled-components';
import { primary, yellow } from '../ColorVariable';

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '64px' : '3em'} ;
    position:relative ;
    z-index: 1;
    font-weight:bolder;
    color:${props => props.backgroundcolor};

    @media (max-width:800px){
        font-size: ${props => props.landing && '46px'};
    }

    @media (max-width:500px){
        ${props => props.landing && `
            font-size:28px;
            text-align:center;
        `};
    }

`
