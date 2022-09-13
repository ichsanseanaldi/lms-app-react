import styled from 'styled-components';

export const StyledTable = styled.table`

    display:block ;
    width:100% ;
    height: 300px ;
    text-align: center ;
    position: relative ;
    border-collapse:collapse;
    border:1px solid black;
    /* border-radius:5px ; */
    overflow:auto;
    
    td,th{
        padding:10px;
    }

    th{
        border-bottom:1px solid black ;
    }

    a{
        text-decoration:underline ;
    }

`