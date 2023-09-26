import styled from "styled-components"

export const StyledHeading = styled.h1`
  z-index: 1;
  font-size: ${(props) => (props.landing ? "80px" : "3em")};
  position: relative;
  padding-bottom: 5px;
  font-weight: 800;
  letter-spacing: -2px;
  text-shadow: 3px 3px black, 7px 7px black;
  text-align: ${(props) => (props.landing ? "center" : "start")};
  color: ${(props) => props.backgroundcolor};
  -webkit-text-stroke: 3px black;

  ${(props) =>
    !props.landing && !props.card ? `border-bottom: 2px solid #EEE;` : ""}

  @media (max-width: 985px) {
    font-size: ${(props) => props.landing && "60px"};
  }
`
