import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;

  padding-bottom: 1.5rem;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CategoryTitle = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  margin-top: 5px;
  grid-gap: 20px;

  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
