import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    a,p,label,button,::placeholder{
        font-family:'Poppins', sans-serif ;
        transition:0.3s ;
    }

    ul,ol{
        margin-left:2rem ;
    }

    a{
        display:block;
        color:inherit;
        text-decoration:none ;

        &:hover{
            opacity:0.5;
        }

    }

    button{
        border:none;
        background-color:transparent ;
        cursor:pointer;

        &:hover{
            opacity:0.5 ;
        }

    }

    p{
        line-height:1.5 ;
    }

    label,::placeholder{
        text-transform:capitalize;
    }

`