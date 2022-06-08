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
    border-radius:5px;
    position:relative;
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
        /* box-shadow: 0 0 15px #1DCDFF ;  */
        background: #1DCDFF;
        /* background: linear-gradient(90deg, rgba(255,2,2,1) 0%, rgba(255,153,0,1) 50%, rgba(255,81,0,1) 100%); */
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

