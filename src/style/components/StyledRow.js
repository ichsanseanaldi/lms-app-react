import styled from 'styled-components';


export const StyledRow = styled.div`

    font-family: 'Kalam', sans-serif;
    font-size:${props => props.iterate === 1 ? '1.1rem' : '1rem'};
    background-color:${props => props.title ? '#303030' : props.backgroundcolor} ;
    color:${props => props.title ? 'white' : props.color} ;
    width:100% ;
    padding: 5px 20px;
    margin: 0 auto ;
    user-select:none;
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