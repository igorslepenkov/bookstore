import styled, { css } from "styled-components";
import { fonts, Color } from "../../ui";

type TitleStyleProps = {
  gridArea?: string;
};

export const StyledTitleH1 = styled.h1<TitleStyleProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  margin: 0;
  ${fonts.h1}
  color: ${Color.Black};
`;

export const StyledTitleH2 = styled.h2<TitleStyleProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  margin: 0;
  ${fonts.h2}
  color: ${Color.Black};
`;

export const StyledTitleH3 = styled.h3<TitleStyleProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  margin: 0;
  ${fonts.h3}
  color: ${Color.Black};
`;
