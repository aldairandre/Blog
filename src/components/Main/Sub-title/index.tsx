import styled from "styled-components";
interface props {
  text: string;
  mt: number;
  mb: number;
}
const SubTitle = ({ text, mt, mb }: props) => (
  <H2 mt={mt} mb={mb}>
    {text}
  </H2>
);

const H2 = styled.h2<{ mt: number; mb: number }>`
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  font-size: 14.05px;
`;

export default SubTitle;
