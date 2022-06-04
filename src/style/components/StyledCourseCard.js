import styled from 'styled-components';


export const StyledCourseCard = styled.div`

    width: 300px;
    height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column ;
    border:1px solid #D9D9D9;
    border-radius:10px;
    background-color: ${props => props.backgroundcolor} ;

`