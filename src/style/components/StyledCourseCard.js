import styled from 'styled-components';


export const StyledCourseCard = styled.div`

    width: 300px;
    height: 300px;
    margin: 10px;
    display: flex;
    flex-direction: column ;
    /* border-radius:10px; */
    background-color: ${props => props.backgroundcolor} ;
    box-shadow:5px 5px 10px rgba(0,0,0,0.2) ;
`