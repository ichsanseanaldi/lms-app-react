import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        scrollbar-width:thin;
    }

    body{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        color:#303030;
        background-color:#EEE;
        line-height:1.5;
    }

   a,ul,ol,span,p,label,button,::placeholder{
        font-family: 'Nunito', sans-serif !important;
        transition:0.3s ;
        font-weight:400 ;
    }

    ul,ol{
        margin-left:2rem ;
    }

    a{
        display:block;
        color:inherit;
        text-decoration:none ;

        &:hover{
            opacity:0.7;
        }

    }

    button{
        border:none;
        background-color:transparent;
        cursor:pointer;

        &:hover{
            opacity:0.7;
        }

    }

    label,::placeholder{
        text-transform:capitalize;
    }


`