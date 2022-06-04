import styled from 'styled-components';


export const StyledHeading = styled.h1`

    font-size: 3.5em ;
    position:relative ;
    z-index: 1;
    user-select:none ;

    &::after{
        content:'';
        position:absolute;
        width:100%;
        height:20px;
        background-color:${props => props.backgroundcolor};
        left: 0;
        bottom: 15px;
        z-index: -1;
    }

`
