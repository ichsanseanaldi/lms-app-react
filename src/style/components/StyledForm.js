import styled from "styled-components"

export const StyledForm = styled.form`
  height: ${(props) => props.heigth};
  width: ${(props) => props.width};
  padding: 20px;

  @media (max-width: 530px) {
    width: 300px;
    padding: 15px;
  }
`
