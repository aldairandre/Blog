import styled from "styled-components";
export interface props {
  text: string;
  mt: number;
  mb: number;
  color: string;
}
const SubTitle = ({ text, mt, mb, color }: props) => (
  <H2 mt={mt} mb={mb} color={color}>
    {text}
  </H2>
);

export const H2 = styled.h2<{ mt: number; mb: number; color: string }>`
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  font-size: 14.05px;
  color: ${(props) => props.color || "white"};
`;

export { SubTitle };
