import styled from 'styled-components';

export const StyledWrapper = styled.div`

    width:100%;
    height:100% ;
    padding: ${props => props.admin ? '0' : props.main ? '0px' : '10px 0'};

    margin-top: ${props => props.margintop};
    margin:${props => props.margintop} 15px ;

    display:${props => props.flex};
    flex-direction:${props => props.direction} ;
    justify-content:${props => props.justifyContent};
    align-items:${props => props.alignItems};

    @media (max-width:800px){
        padding:10px 0 0;
        margin:10px;
        justify-content:center ;
        align-items:center ;
    }

    @media (max-width:700px){
        margin:${props => props.main ? '0' : props.admin ? '0' : '60px 10px'};
    }

    @media (max-width:530px){
        margin-top:50px ;
        padding:0 5px ;
    }
    

`