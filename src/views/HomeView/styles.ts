import styled, { createGlobalStyle } from 'styled-components';
import { device } from '../../utils/responsive';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    line-height: 1.35;

    p {
      line-height: 1.45;
    }
    
  }
`;

export const ContentWrapper = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 4rem;
  grid-template-columns: 90%;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 34rem;
  }
`;
