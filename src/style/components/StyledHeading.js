import styled from 'styled-components';
import { primary, yellow } from '../ColorVariable';

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '64px' : '3em'} ;
    position:relative ;
    z-index: 1;
    font-weight:bolder;
    color:${props => props.backgroundcolor};
    text-shadow: 5px 5px 0px ${primary}, 9px 9px 0px ${yellow};
    -webkit-text-stroke:1px black;

    @media (max-width:800px){
        font-size: ${props => props.landing && '46px'};
    }

`
