import styled from 'styled-components';

export const StyledHeading = styled.h1`

    font-size: ${props => props.landing ? '3.8em' : '3em'} ;
    position:relative ;
    z-index: 1;

    &::after{
        content:'';
        position:absolute;
        z-index: -1;
        width:100% ;
        height:10px ;
        left: 0;
        bottom: 10px;
        background-color:${props => props.backgroundcolor};
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
