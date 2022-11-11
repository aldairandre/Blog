import styled from "styled-components";

const StoryPost = () => {
  return (
    <>
      <Container>
        <Image></Image>
        <ContText>
          <Text>Como relaxar depois de um dia de trabalho.</Text>
        </ContText>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 145px;
  height: auto;
`;

const Image = styled.div`
  width: 100%;
  height: 63px;
  background: url("./src/assets/image/sabrina.jpg");
  background-position: 100% 33%;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ContText = styled.div`
  padding: 19px 5px;
  background: #AB3A92;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Text = styled.h2`
  font-size: 12px;
`;

export default StoryPost;
