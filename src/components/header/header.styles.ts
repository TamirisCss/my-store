import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  font-family: "Handlee", cursive;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
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

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
