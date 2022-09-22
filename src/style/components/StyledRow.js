import styled from 'styled-components';


export const StyledRow = styled.div`

    font-family: 'Kalam', sans-serif;
    font-size:${props => props.ordinal === 'st' || props.title ? '1.2rem' : '1rem'};
    background-color:${props => props.title ? '#303030' : props.backgroundcolor} ;
    color:${props => props.title ? 'white' : props.color} ;
    /* border-radius:10px; */
    /* width:${props => props.title ? '100%' : props.width}; */
    width:100% ;
    padding: ${props => props.title ? '10px' : '5px'} 20px;
    margin: 0 auto ;
    user-select:none;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    transition: 0.8s cubic-bezier(0, 0.7, 0.4, 1);

    &:hover{
        transform:${props => props.title ? 'scale(1)' : 'scale(1.05)'} ;
    }

    @media (max-width:700px){
        font-size:${props => props.ordinal === 'st' ? '1rem' : '0.9rem'};
    }

    @media (max-width:530px){
        font-size:0.6rem;
    }


`