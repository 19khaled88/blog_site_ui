import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  background: #00022e;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
  padding-right:10px;
`;

export const TitleContainer = styled.div`
  margin: auto;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;

export const NavigationContainer = styled.div`
  display:flex;
  flex-direction: row;
  gap: 1rem;

`