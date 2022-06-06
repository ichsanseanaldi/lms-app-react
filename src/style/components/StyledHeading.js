import styled, { keyframes } from 'styled-components';


const animate = keyframes`

    0%{
        width:0%;
    }
    100%{
        width:100% ;
    }


`

export const StyledHeading = styled.h1`

    font-size: 3.5em ;
    position:relative ;
    z-index: 1;
    user-select:none ;

    &::after{
        content:'';
        position:absolute;
        height:20px;
        background-color:${props => props.backgroundcolor};
        left: 0;
        bottom: 15px;
        z-index: -1;
        animation: ${animate} 1s ease-in-out normal forwards;
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
