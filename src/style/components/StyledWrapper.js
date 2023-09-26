import styled from "styled-components"

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.transparent ? "transparent" : "#FFF")};
  padding: ${(props) =>
    props.admin
      ? "0"
      : props.main
      ? "10rem 0 0"
      : props.login
      ? "5rem 0 0"
      : "10px 30px"};
  margin-top: ${(props) => props.margintop};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
  display: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border-radius: 10px;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 700px) {
    margin: ${(props) =>
      props.main ? "7rem 0 0" : props.admin ? "0" : "60px 10px"};
  }

  @media (max-width: 530px) {
    padding: 15px;
  }
`
