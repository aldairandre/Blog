import styled from "styled-components";
import StoryPost from "./Story-Card";
import SubTitle from "./Sub-title";
import Title from "./title";
export const Main = () => {
  return (
    <Container>
      <Title />
      <SubTitle text={"Posts em destaque"} mt={18} mb={12} />
      <ContainerPost>
        <StoryPost />
        <StoryPost />
      </ContainerPost>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
`;

const CardsContainer = styled.section``;

const ContainerPost = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

export default Main;
