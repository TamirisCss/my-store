import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
  padding: 20px;
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 1rem;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`;
