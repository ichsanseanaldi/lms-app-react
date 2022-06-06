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
        color:#303030 ;
        background-color:#FAFAFA ;
    }

    ul,ol,span,p,label,button,::placeholder{
        font-family:'Raleway', sans-serif ;
        transition:0.3s ;
        font-weight:500 ;
    }

    ul,ol{
        line-height:1.5 ;
        margin-left:2rem ;
    }

    a{
        display:block;
        color:inherit;
        text-decoration:none ;
        transition:0.5s ;

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