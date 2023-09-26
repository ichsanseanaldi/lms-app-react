import styled from "styled-components"

export const StyledRow = styled.div`
  font-size: ${(props) => props.title && "18px"};
  background-color: ${(props) =>
    props.title ? "#303030" : props.backgroundcolor};
  color: ${(props) => (props.title ? "white" : props.color)};
  width: 100%;
  padding: 10px 20px;
  margin: 0 auto;
  transition: 0.2s;
  text-align: center;

  &:hover {
    transform: ${(props) => (props.title ? "scale(1)" : "scale(1.02)")};
  }

  @media (max-width: 700px) {
    font-size: ${(props) => (props.ordinal === "st" ? "16px" : "15px")};
  }
`
