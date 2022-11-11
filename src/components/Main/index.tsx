import styled from "styled-components";
import StoryPost from "./Story-Card";
import {SubTitle,props} from "./Sub-title";
import Title from "./title";
export const Main = () => {
  return (
    <Container>
      <Title />
      <SubTitle text={"Posts em destaque"} mt={18} mb={12} color=''/>
      <ContainerPost>
        <StoryPost />
        <StoryPost />
      </ContainerPost>
      <SubTitle text={"Todos os Posts"} mt={18} mb={11} color=''/>
      <SubTitle text={"Filtar posts por"} mt={0} mb={10} color='#BCB5B5'/>
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
  overflow-x: scroll;
`;

export default Main;
