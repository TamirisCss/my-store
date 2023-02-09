import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 1.5rem;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;

  p {
    font-size: 21px;
    font-weight: 500;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 20px;

  margin-top: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;
