import styled from "styled-components";

interface propsButton {
  text: string;
}
const Button = ({text}:propsButton) => {
  return (
    <ButtonStyle type="button" value={text} />
  )
};

const ButtonStyle = styled.input`
  padding: 10px 16px;
  background: #AB3A92;
  border-radius: 32px;
  color:white;
  font-size: 12px;
  border:none;
`

export {Button};
