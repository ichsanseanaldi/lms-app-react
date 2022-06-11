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

export const StyledBar = styled.div`

    text-align:center;
    position:relative;
    padding: 5px 10px ;
    z-index:2;
    color:#303030 ;
    font-weight:700 ;
    
    &::after{
        content:'';
        position:absolute ;
        top:0 ;
        bottom:0 ;
        left:0 ;
        width:${props => props.data}% ;
        z-index:-2 ;
        border-radius:5px ;
        background: #1DCDFF;
    }

    &::before{
        content:'';
        position:absolute ;
        top:0 ;
        bottom:0 ;
        left:0 ;
        width:50px ;
        z-index:-1 ;
        animation: ${props => wave(props.data)} 1s infinite forwards ;
        background-color:#fff;
        opacity:0.1 ;
    }

`

