import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color:#303030;
        background-color:#FFF;
        user-select:none;
        line-height:1.5;
    }

   a,ul,ol,span,p,label,button,::placeholder{
        font-family:'Open Sans', sans-serif ;
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

    label,::placeholder{
        text-transform:capitalize;
    }


`