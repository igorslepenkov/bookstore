import styled from "styled-components";
import { fonts, Media } from "../../ui";
import { Color } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  border-top: 1px solid ${Color.GreyLight};

  ${Media.MD} {
    flex-direction: row;
  }
`;

export const FooterParagraph = styled.p`
  ${fonts.bodyRegular}
  color: ${Color.Grey};
`;
