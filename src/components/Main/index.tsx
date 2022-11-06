import styled from "styled-components";
import Title from "./title";
export const Main = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

const Container = styled.main`
    margin: 0px 25px;
`

export default Main;
