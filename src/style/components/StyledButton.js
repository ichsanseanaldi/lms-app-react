import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 15px;
  margin: 10px ${(props) => (props.main ? "0" : "")};
  border-radius: 5px;
  font-weight: 600;
  border: 2px solid black;
  box-shadow: 6px 6px 0px 1px black;

  width: ${(props) => props.width};
  color: black;
  background-color: ${(props) => props.backgroundcolor};
  text-align: ${(props) => props.textAlign};

  &:hover {
    box-shadow: 0 0 0 0;
    opacity: 1 !important;
  }

  @media (max-width: 800px) {
    width: ${(props) => props.main && "fit-content"};
  }
`
