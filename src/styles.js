import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #212121;
`;

export const AppBody = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  color: #3AA335;
  font-weight: bold;
  border: 1px solid #7914ec;
  background: white;
  cursor: pointer;
  transition: all ease-in-out 0.4s;

  &:hover {
    background: #c3c1c1;
  }
`;
