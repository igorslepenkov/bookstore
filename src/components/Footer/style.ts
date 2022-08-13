import styled from "styled-components";
import { fonts } from "../../ui";
import { Color } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${Color.BackgroundFocusInput};
`;

export const FooterParagraph = styled.p`
  ${fonts.bodyRegular}
  color: ${Color.InputPlaceholder};
`;
