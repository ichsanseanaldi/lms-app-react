import styled, { keyframes } from 'styled-components';


const animate = keyframes`

    0%{
        height:0;
    }
    100%{
        height:20px;
    }

`

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '3.8em' : '3em'} ;
    position:relative ;
    z-index: 1;

    &::after{
        content:'';
        position:absolute;
        width:100% ;
        background-color:${props => props.backgroundcolor};
        left: 0;
        bottom: 15px;
        z-index: -1;
        animation: ${animate} 0.5s cubic-bezier(0, 0.7, 0.4, 1) normal forwards;
        transition:0.5s all ;
    }

    @media (max-width:850px){
        font-size:3em ;
    }

    @media (max-width:800px){
        font-size:2em ;
        &::after{
            display:none ;
        }
    }

`
