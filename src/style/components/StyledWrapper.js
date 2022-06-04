import styled from 'styled-components';


export const StyledWrapper = styled.div`

    width:100%;
    height: 100%;
    padding: 20px 0;

    margin-top: ${props => props.margintop};

    display:${props => props.flex};
    flex-direction:${props => props.direction} ;
    justify-content:${props => props.justifyContent};
    align-items:${props => props.alignItems};
    

`