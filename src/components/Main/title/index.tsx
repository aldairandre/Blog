import styled from "styled-components"
const Title = () => {
  return (
    <H1>
      Olá,<br/>
      <span>Sabrina</span>!
    </H1>
  )
}

const H1 = styled.h1`
  margin-top: 20px;
  line-height: 115.7%;
  span {
    color: #EB50C8;
  }
`

export default Title