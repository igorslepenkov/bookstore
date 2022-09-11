import styled, { css } from "styled-components";
import { Color, fonts } from "../../ui";

type ErrorNotificationProps = {
  gridArea?: string;
};

export const ErrorNotification = styled.p<ErrorNotificationProps>`
  ${({ gridArea }) => {
    if (gridArea) {
      return css`
        grid-area: ${gridArea};
      `;
    }
    return null;
  }}
  ${fonts.bodyBold}
  color: ${Color.Danger};
`;
