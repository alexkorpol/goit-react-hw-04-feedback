import styled from "styled-components"

export const Button = styled.button`
  width: 130px;
  height: 50px;
  color: #fafafa;
  border-radius: 50%;
  padding: 10px 25px;
  margin-right: 20px;
  background-color: #84451b;
  border: none;


  &:hover {
    background-color: #a7b61c;
    cursor: pointer;
    color: black;

  }

`

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
