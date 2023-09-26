import styled from "styled-components"

export const StyledCard = styled.div`
  width: 300px;
  height: 150px;
  margin: 10px;
  padding: 10px 0;
  display: flex;
  border-radius: 10px;
  color: #fff;
  background-color: ${(props) => props.bordercolor};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  .svg-card {
    transform: scale(0.7);
    transition: 0.2s;
  }

  &:hover .svg-card {
    transform: scale(0.75);
  }

  @media (max-width: 920px) {
    width: 250px;
  }

  @media (max-width: 700px) {
    .svg-card {
      padding: 0;
    }
  }
`
