import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Indent, indentsConstructor } from "../../ui";

type InputLabelProps = {
  gridArea?: string;
};

export const InputLabel = styled.label<InputLabelProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  ${indentsConstructor.create(Indent.MT, 7)}
  ${fonts.bodyBold};
  color: ${Color.Black};
`;
