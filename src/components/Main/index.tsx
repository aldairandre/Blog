import styled from "styled-components";
import SubTitle from "./Sub-title";
import Title from "./title";
export const Main = () => {
  return (
    <Container>
      <Title />
      <SubTitle text={"Posts em destaque"} mt={18} mb={12}/>
      <CardsContainer>
        
      </CardsContainer>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
`;

const CardsContainer = styled.section`
  height: 108.03px;
  width: 100%;
  background: red;
  overflow-y: scroll;
`;

export default Main;
