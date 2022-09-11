import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts } from "../../ui";

type InputStyleProps = {
  gridArea?: string;
};

export const Input = styled.input<InputStyleProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  flex-grow: 1;
  padding: 5px 20px;
  ${fonts.bodyRegular}
  color: ${Color.Black};
  border: 1px solid #e7e7e7;
  outline: none;

  &:focus {
    background-color: ${Color.GreyLight};
    border: 2px solid #e7e7e7;
  }

  &::placeholder {
    ${fonts.bodyRegular}
    color: ${Color.Grey};
    opacity: 1;
  }
`;
