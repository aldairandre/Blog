import styled from "styled-components";
import { Button } from "./button";
import StoryPost from "./Story-Card";
import { SubTitle } from "./Sub-title";
import Title from "./title";
const ListButtonValue = ["Tudo", "Hoje", "Make Up", "Decoração",'Teste1','Teste2'];
export const Main = () => {
  return (
    <>
      <Container>
        <Title />
        <SubTitle text={"Posts em destaque"} mt={18} mb={12} color="" />
        <ContainerPost>
          <StoryPost />
          <StoryPost />
        </ContainerPost>
        <SubTitle text={"Todos os Posts"} mt={18} mb={11} color="" />
        <SubTitle text={"Filtar posts por"} mt={0} mb={10} color="#BCB5B5" />
      </Container>
      <ContainerButtons>
        {ListButtonValue.map((text, index) => {
          return <Button key={index} text={text} />;
        })}
      </ContainerButtons>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
`;

const ContainerPost = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  overflow-x: scroll;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 7px;
  width: 100%;
  padding-left: 25px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export default Main;
