import styled, { keyframes } from 'styled-components';


const wave = props => keyframes`

    0%{
        left:0;
    }
    100%{
        left:${props}%;
        right:0;
    }

`

const progress = props => keyframes`

    0%{
        width:0 ;
    }
    100%{
        width:${props}% ;
    }


`


export const StyledBar = styled.div`

    text-align:center;
    position:relative;
    padding: 5px 10px ;
    z-index:2;
    color:#505050 ;
    font-weight:700 ;
    
    &::after{
        content:'';
        position:absolute ;
        top:0 ;
        bottom:0 ;
        left:0 ;
        width:${props => props.data}% ;
        z-index:-2 ;
        /* border-radius:5px ; */
        background: #1DCDFF;
        animation: ${props => progress(props.data)} 3s cubic-bezier(0, 0.7, 0.4, 1) forwards;
    }

    &::before{
        content:'';
        position:absolute ;
        top:0 ;
        bottom:0 ;
        left:0 ;
        width:50px ;
        z-index:-1 ;
        border-radius:5px ;
        animation: ${props => wave(props.data)} 1s infinite forwards ;
        background-color:#fff;
        opacity:0.1 ;
    }

`

